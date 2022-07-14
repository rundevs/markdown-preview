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
    icon: 'buildResources/icon.ico'

  },
  linux: {
    icon: 'buildResources/icon.png',
    target: ['snap', 'pacman', 'AppImage', 'deb', 'rpm'],
    artifactName: '${productName}_${version}.${ext}',
    category: 'Development',
    maintainer: 'Luis Gabriel janco',
    publish: 'github',
  },
  nsis: {
    oneClick: true,
    license: 'buildResources/LICENCE.md',
    installerIcon: 'buildResources/icon.ico',
    uninstallerIcon: 'buildResources/icon.ico',
    deleteAppDataOnUninstall: false
  }
}
module.exports = config
