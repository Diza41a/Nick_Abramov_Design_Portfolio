import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authenticateAdmin } from '../../api/authMethods.api';
import { cookies } from '../../api/api';
import { GlobalContext } from '../../contexts/global';

const AdminLogin = (): JSX.Element => {
  const {
    authState: [isAdminLoggedIn, setIsAdminLoggedIn],
  } = useContext(GlobalContext);
  const navigate = useNavigate();
  const [passwordInput, setPasswordInput] = useState('');
  const handleChange = ({ target }: React.FormEvent<HTMLInputElement>) =>
    setPasswordInput((target as HTMLInputElement).value);
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const password = passwordInput.trim();
    authenticateAdmin(password)
      .then(({ data }) => {
        const { access_token } = data;
        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 7);
        cookies.remove('access_token', { path: '/' });
        cookies.set('access_token', access_token, { expires: expirationDate, path: '/' });
        setIsAdminLoggedIn(true);
        navigate('/admin/dashboard');
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  useEffect(() => {
    if (isAdminLoggedIn) {
      navigate('/admin/dashboard');
    }
  });

  return (
    <form>
      Enter admin password here:
      <input type="text" value={passwordInput} onInput={handleChange} />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
};

export default AdminLogin;