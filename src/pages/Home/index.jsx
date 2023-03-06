import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom'
import './index.css'

export const HomePage = () => {
  const navigate = useNavigate()

  const handleClickPrivacyPolicy = useCallback(() => {
    navigate('./privacy-policy')
  }, [navigate])

  return (
    <div className="body">
      <div className="title">Hermes Vito Home</div>
      <div className="button" onClick={handleClickPrivacyPolicy}>
        隱私權政策
      </div>
    </div>
  );
}