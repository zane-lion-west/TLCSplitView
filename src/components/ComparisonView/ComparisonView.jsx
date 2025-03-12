import { useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

import s from "./ComparisonView.module.scss";

const SplitView = ({ mobileSkin, desktopSkin }) => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const websiteUrl = params.get("url") || "https://example.com"; // Fallback URL

  return (
    <div className={s.comparisonContainer}>
      {/* Desktop (Left) View */}
      <div className={s.desktopContainer}>
        {desktopSkin && (
          <img
            src={desktopSkin}
            alt="Desktop Frame"
            className={s.desktopSkin}
          />
        )}
        <iframe
          src={websiteUrl}
          title="Desktop View"
          className={s.desktopIframe}
          frameBorder="0"
        />
      </div>

      {/* Mobile (Right) View */}
      <div className={s.mobileContainer}>
        {mobileSkin && (
          <img
            src={mobileSkin}
            alt="Mobile Frame"
            className={s.mobileSkin}
          />
        )}
        {/* Fixed-size mobile viewport: stays constant even on browser resize */}
        <div className={s.mobileViewport}>
          <iframe
            src={websiteUrl}
            title="Mobile View"
            className={s.mobileIframe}
            frameBorder="0"
          />
        </div>
      </div>
    </div>
  );
};

export default SplitView;

SplitView.propTypes = {
  websiteUrl: PropTypes.string.isRequired,
  mobileSkin: PropTypes.string,   // Optional: image of a mobile device frame
  desktopSkin: PropTypes.string,  // Optional: image of a desktop/laptop frame
};

// import PropTypes from 'prop-types';
// import s from './TestComparisonView.module.scss';

// const ComparisonView = ({ websiteUrl, mobileSkin=null, desktopSkin=null }) => {
//   return (
//     <div className={s.comparisonContainer}>
//       {/* Desktop View */}
//       <div className={s.desktopContainer}>
//         {desktopSkin && (
//           <img
//             src={desktopSkin}
//             alt="Desktop Frame"
//             className={s.desktopSkin}
//           />
//         )}
//         <iframe
//           src={websiteUrl}
//           title="Desktop View"
//           className={s.desktopIframe}
//           frameBorder="0"
//         />
//       </div>

//       {/* Mobile View */}
//       <div className={s.mobileContainer}>
//         {mobileSkin && (
//           <img
//             src={mobileSkin}
//             alt="Mobile Frame"
//             className={s.mobileSkin}
//           />
//         )}
//         {/* This container simulates a mobile device viewport */}
//         <div className={s.mobileViewport}>
//           <iframe
//             src={websiteUrl}
//             title="Mobile View"
//             className={s.mobileIframe}
//             frameBorder="0"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// ComparisonView.propTypes = {
//   websiteUrl: PropTypes.string.isRequired,
//   mobileSkin: PropTypes.string,   // Optional: image of a mobile device frame
//   desktopSkin: PropTypes.string,  // Optional: image of a desktop/laptop frame
// };

// export default ComparisonView;
