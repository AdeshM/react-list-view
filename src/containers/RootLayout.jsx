import { Outlet, useNavigate } from "react-router-dom";
export function RootLayout() {
  const navigate = useNavigate();
  
  const navigateTo = (path) => {
    navigate(path);
    return false;
  }

  return (
    <main>
      <nav className="links">
        <span href="/" onClick={ () => navigateTo('/') }>HOME</span> &nbsp;|&nbsp;
        <span href="/test-1" onClick={ () => navigateTo('test-1') }>BC 1</span> &nbsp;|&nbsp;
        <span href="/test-2" onClick={ () => navigateTo('test-2') }>BC 2</span> &nbsp;|&nbsp;
        <span href="/test-2.1" onClick={ () => navigateTo('test-2.1') }>BC 2.1</span> &nbsp;|&nbsp;
        <span href="/test-3" onClick={ () => navigateTo('test-3') }>BC 3</span> &nbsp;|&nbsp;
      </nav>
      <Outlet />
    </main>
  );
}
