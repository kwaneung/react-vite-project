import { Outlet } from 'react-router-dom';

/**
 * src/pages/user/UserHome.tsx
 */
const UserHome = () => {
  console.log('UserHome component!!!');
  // 조회, 수정, 추가, 삭제 기능 추가 및 아래 아울렛 동적 랜더링

  const selectUser = () => {
    console.log('selectUser function!!');
  };
  const updateUser = () => {
    console.log('updateUser function!!');
  };
  const insertUser = () => {
    console.log('selecinsertUsertUser function!!');
  };
  const deleteUser = () => {
    console.log('deleteUser function!!');
  };

  return (
    <>
      <h1>UserHome Component</h1>
      <button onClick={selectUser}>유저 조회</button>
      <button onClick={updateUser}>유저 수정</button>
      <button onClick={insertUser}>유저 추가</button>
      <button onClick={deleteUser}>유저 삭제</button>
      <br />
      ==============================
      <br />
      <Outlet />
    </>
  );
};

export default UserHome;
