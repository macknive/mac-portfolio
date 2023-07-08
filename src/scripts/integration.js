console.log('Running');

var customEntryElement = document.querySelector('.vs');

console.log(customEntryElement);

function addWidget() {
  // eslint-disable-next-line no-undef
  vs.addWidget({
    apiKey: '8ff81a99ec736da0ff867697519d5116427d0f09', // Marui
    //inpageContainers: ['#vs-inpage'],
    //inpageLuxuryContainers: ['#vs-inpage-luxury'],
    //inpageMiniContainers: ['#vs-inpage-mini'],
    //smartTableContainers: ['#vs-smart-table'],
    //fittingRoomButtonContainers: ['#vs-fitting-room-button'],
    region: 'com',
    env: 'staging',
    language: 'en',
    externalProductId: 'TO4052031701',
    smartTablePlus: true,
    onEvents: {
      'user-saw-widget-button': function () {
        customEntryElement.style.display = 'block';
        customEntryElement.addEventListener('click', function () {
          document.body.dispatchEvent(new Event('open-aoyama'));
        });
      },
    },
  });
}

// load integration, wait when ready and initialize Aoyama
async function fetchLatestVersion() {
  const response = await fetch(
    'https://static.api.virtusize.com/a/aoyama/latest.txt'
  );
  var script = document.createElement('script');
  script.src = `https://static.api.virtusize.jp/a/aoyama/staging/integration.js`;
  script.onload = function () {
    addWidget();
  };
  document.getElementsByTagName('head')[0].appendChild(script);
}

fetchLatestVersion();
