// custom typefaces
import './src/style/all.scss';
import 'typeface-montserrat';
import 'typeface-merriweather';
import 'typeface-nunito';
import 'typeface-alegreya';

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This application has been updated. ` +
      `Reload to display the latest version?`
  );

  if (answer === true) {
    window.location.reload();
  }
};
