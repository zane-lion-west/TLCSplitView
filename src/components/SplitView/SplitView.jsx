import { useState } from 'react';
import SplitPane from 'react-split-pane';
import s from './SplitView.module.scss';

// 1. Protocol-normalizer helper
function ensureProtocol(rawUrl) {
  return /^https?:\/\//i.test(rawUrl)
    ? rawUrl
    : `https://${rawUrl}`;
}

export default function SplitView() {
  const [url, setUrl] = useState('https://example.com');
  const [device, setDevice] = useState('legacy');

  const deviceSizes = {
    iphone: { width: 390, height: 844 }, // iPhone 14
    galaxy: { width: 412, height: 915 }, // Samsung Galaxy S23
    legacy: { width: 375, height: 667 }, // Current legacy default
  };
  const { width, height } = deviceSizes[device];

  // 2. Normalize user-entered URL
  const safeUrl = ensureProtocol(url);

  return (
    <div className={s.wrapper}>
      <div className={s.urlBarFixed}>
        <p className={s.urlLabel}>Please enter a URL:</p>
        <input
          type="text"
          placeholder="Enter website URL..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className={s.urlInput}
        />
        <p className={s.urlLabel}>Choose your Mobile device:</p>
        <select
          value={device}
          onChange={(e) => setDevice(e.target.value)}
          className={s.deviceSelect}
        >
          <option value="iphone">iPhone</option>
          <option value="galaxy">Samsung Galaxy</option>
          <option value="legacy">Legacy</option>
        </select>
      </div>

      <div className={s.splitPaneWrapper}>
        <SplitPane split="vertical" minSize={400} defaultSize="80%">
          <div className={s.desktopPane}>
            <div className={s.label}>Desktop View</div>
            {/* 3. Use safeUrl */}
            <iframe
              src={safeUrl}
              title="Desktop View"
              className={s.desktopIframe}
            />
          </div>

          <div className={s.mobilePane}>
            <div className={s.label}>Mobile View ({device})</div>
            <div
              className={s.mobileFrame}
              style={{ width: `${width}px`, height: `${height}px` }}
            >
              <iframe
                src={safeUrl}
                title="Mobile View"
                className={s.mobileIframe}
              />
            </div>
          </div>
        </SplitPane>
      </div>
    </div>
  );
}



// // SplitView.jsx with react-split-pane reintroduced for TLC polished side-by-side control


// import { useState } from 'react';
// import SplitPane from 'react-split-pane';
// import s from './SplitView.module.scss';

// export default function SplitView() {
//   const [url, setUrl] = useState('https://example.com');
//   const [device, setDevice] = useState('legacy');

//   const deviceSizes = {
//     iphone: { width: 390, height: 844 }, // iPhone 14
//     galaxy: { width: 412, height: 915 }, // Samsung Galaxy S23
//     legacy: { width: 375, height: 667 }, // Current legacy default
//   };

//   const { width, height } = deviceSizes[device];

//   return (
//     <div className={s.wrapper}>
//       <div className={s.urlBarFixed}>
//         <p className={s.urlLabel}>Please enter a URL:</p>
//         <input
//           type="text"
//           placeholder="Enter website URL..."
//           value={url}
//           onChange={(e) => setUrl(e.target.value)}
//           className={s.urlInput}
//         />
//         <p className={s.urlLabel}>Choose your Mobile device:</p>
//         <select
//           value={device}
//           onChange={(e) => setDevice(e.target.value)}
//           className={s.deviceSelect}
//         >
//           <option value="iphone">iPhone</option>
//           <option value="galaxy">Samsung Galaxy</option>
//           <option value="legacy">Legacy</option>
//         </select>
//       </div>

//       <div className={s.splitPaneWrapper}>
//         <SplitPane split="vertical" minSize={400} defaultSize="80%">
//           <div className={s.desktopPane}>
//             <div className={s.label}>Desktop View</div>
//             <iframe src={url} title="Desktop View" className={s.desktopIframe} />
//           </div>

//           <div className={s.mobilePane}>
//             <div className={s.label}>Mobile View ({device})</div>
//             <div
//               className={s.mobileFrame}
//               style={{ width: `${width}px`, height: `${height}px` }}
//             >
//               <iframe src={url} title="Mobile View" className={s.mobileIframe} />
//             </div>
//           </div>
//         </SplitPane>
//       </div>
//     </div>
//   );
// }
