/**
 * @type {import('electron-builder').Configuration}
 * @see https://www.electron.build/configuration/configuration
 */
const config = {
  appId: 'YourAppID',
  asar: true,
  directories: {
    output: 'release/${version}',
    buildResources: 'buildResources',
  },
  files: [
    'dist'
  ],
  mac: {
    artifactName: '${productName}_${version}.${ext}',
    target: [
      'dmg'
    ]
  },
  win: {
    target: [
      {
        target: 'nsis',
        arch: [
          'x64'
        ]
      }
    ],
    artifactName: '${productName}_${version}.${ext}',
    publish: 'github',
    icon: 'buildResources/icon.png'

  },
  linux: {
    icon: 'buildResources/icon.png',
    target: ['snap', 'pacman', 'AppImage'],
    artifactName: '${productName}_${version}.${ext}',
    category: 'Development',
    maintainer: 'Luis Gabriel j.',
    publish: 'github',
  },
  nsis: {
    oneClick: true,
    license: 'LICENSE',
    installerIcon: 'buildResources/icon.png',
    uninstallerIcon: 'buildResources/icon.png',
    perMachine: false,
    allowToChangeInstallationDirectory: true,
    deleteAppDataOnUninstall: false
  }
}
module.exports = config
