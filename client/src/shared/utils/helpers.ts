const setButtonStyles = (buttonTypeVariable: boolean, buttonColor: string): string => `text-white py-2 px-4 bg-${buttonColor}-600 rounded-lg transition duration-300 ease-in-out ${buttonTypeVariable ? `bg-${buttonColor}-600 cursor-not-allowed` : `bg-${buttonColor}-200 hover:bg-${buttonColor}-400`}`

import { signOut } from 'firebase/auth';
import { auth } from '../../views/app/services/firebase';
import useUploadContext from '../../views/app/hooks/useUploadContext';

const AUTO_LOGOUT_TIME = 30 * 60 * 1000; // 30 minutes

const startAutoLogoutTimer = () => {
  let logoutTimer: NodeJS.Timeout;

  const resetTimer = () => {
    clearTimeout(logoutTimer);
    logoutTimer = setTimeout(async () => {
      try {
        await signOut(auth);
        window.location.href = '/'; // Redirect to landing page or sign-in page
      } catch (error) {
        console.error("Error signing out:", error);
      }
    }, AUTO_LOGOUT_TIME);
  };

  window.addEventListener('mousemove', resetTimer);
  window.addEventListener('keydown', resetTimer);

  resetTimer(); // Start timer on initial page load
};

const resetUploadedVideoData = () => {

  const { setSelectedVideoFile, setUploadedVideoInformation } = useUploadContext();

  // Reset the selected Video File and the uploaded video Information
  setSelectedVideoFile(null);
  setUploadedVideoInformation([]);
};

export { setButtonStyles, startAutoLogoutTimer, resetUploadedVideoData};