import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/icon_back.png'
import './index.css'

export const CompanyPrivacyPolicyPage = () => {
  const navigate = useNavigate()

  const handleGoBack = useCallback(() => {
    navigate('..')
  }, [navigate])

  return (
    <div className='container'>
      <div style={{ padding: 8 }} onClick={handleGoBack}>
        <img src={logo} width={16} height={16} alt="back" />
      </div>
      <p style={{ textAlign: 'left', fontSize: '14px' }}>
          隱私權政策<br /><br />
          感謝您使用本網站。我們非常重視您的隱私權，並將致力於保護您的個人資料。本隱私權政策旨在告知您有關我們的網站及其使用方式的信息，而不會涉及任何個人資料的蒐集、使用或共享。
          <br /><br />
          1. 使用者資料<br />
          我們會蒐集有關使用者的一些無個人身份辨識的資料，例如您的瀏覽器類型、您所使用的操作系統、您訪問我們網站的日期和時間、以及瀏覽網站的頁面和內容。這些資料是用來幫助我們改善網站的性能和功能，以提供更好的使用體驗。
          <br /><br />
          2. 資料安全<br />
          我們會採取合理的技術和組織措施，以保護您的使用者資料。但是，由於互聯網的本質，我們無法保證資料傳輸的完全安全。
          <br /><br />
          3. 資料共享<br />
          我們不會將您的使用者資料出售、交易或以其他方式出售給第三方。但在某些情況下，我們可能會向政府當局披露使用者資料，以遵守法律要求或司法程序。
          <br /><br />
          4. Cookie<br />
          我們可能會使用 cookie 或其他技術，以記錄您的偏好和提供更好的使用體驗。如果您不希望使用 cookie，您可以在瀏覽器設定中關閉 cookie。
          <br /><br />
          5. 連結到其他網站<br />
          本網站可能包含指向其他網站的連結。我們不負責這些網站的隱私權政策或其使用者資料的蒐集方式。
          <br /><br />
          6. 未成年人的隱私權<br />
          我們不會有意向未滿 18 歲的兒童蒐集任何個人資料。如果您是未成年人，請不要在本網站上提供任何個人資料。
          <br /><br />
          7. 隱私權政策的變更<br />
          我們保留在任何時候修改或更新本隱私權政策的權利。當我們對本隱私權政策
      </p>
    </div>
  );
}
  