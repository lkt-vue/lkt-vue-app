#!/usr/bin/env node
// scripts/install-peers.cjs
const { spawnSync } = require('child_process');
const path = require('path');

const root = process.cwd(); // proyecto consumidor
const myPkg = require(path.join(__dirname, '..', 'package.json'));
const peers = myPkg.peerDependencies || {};

const args = process.argv.slice(2);
const force = args.includes('--force') || args.includes('-f');
const dev = args.includes('--dev') || args.includes('-D');

// Detectar gestor de paquetes desde npm_config_user_agent si está presente
function detectPkgManager() {
    const ua = (process.env.npm_config_user_agent || '').toLowerCase();
    if (ua.startsWith('pnpm')) return 'pnpm';
    if (ua.startsWith('yarn')) return 'yarn';
    return 'npm';
}
const pm = detectPkgManager();

function isInstalled(dep) {
    try {
        require.resolve(dep, { paths: [root] });
        return true;
    } catch {
        return false;
    }
}

function run(cmd, args) {
    const r = spawnSync(cmd, args, { stdio: 'inherit' });
    return r.status === 0;
}

function installOne(dep, version) {
    if (!force && isInstalled(dep)) {
        console.log(`✔ ${dep} ya está instalado — saltando.`);
        return true;
    }

    let cmd, cmdArgs;
    if (pm === 'pnpm') {
        cmd = 'pnpm';
        cmdArgs = ['add', `${dep}@${version}`];
        if (dev) cmdArgs.push('-D');
    } else if (pm === 'yarn') {
        cmd = 'yarn';
        cmdArgs = ['add', `${dep}@${version}`];
        if (dev) cmdArgs.push('--dev');
    } else {
        cmd = 'npm';
        cmdArgs = ['install', `${dep}@${version}`];
        if (dev) cmdArgs.push('--save-dev');
        else cmdArgs.push('--no-save')
    }

    console.log(`📦 Instalando ${dep}@${version} con: ${cmd} ${cmdArgs.join(' ')}`);
    return run(cmd, cmdArgs);
}

const items = Object.entries(peers);
if (items.length === 0) {
    console.log('No hay peerDependencies en este paquete.');
    process.exit(0);
}

const failed = [];
for (const [dep, ver] of items) {
    if (!installOne(dep, ver)) failed.push(dep);
}

if (failed.length) {
    console.error('❌ Fallaron las instalaciones de:', failed.join(', '));
    process.exit(1);
}
console.log('✅ peerDependencies instaladas correctamente.');
