export default function Layout({children, setToken}) {
    function handleLogout(e) {
        e.preventDefault();

        setToken(null);
    }
  return (
       
        <div className="hold-transition sidebar-mini layout-fixed row">
      <div className="wrapper col-2">
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" data-widget="pushmenu" href="#">
                <i className="fas fa-bars"></i>
              </a>
            </li>
          </ul>
        </nav>

        {/* Sidebar */}
        <aside className="main-sidebar sidebar-dark-primary elevation-4">

          {/* Brand */}
          <a href="/" className="brand-link">
            <span className="brand-text fw-bold">Admin Panel</span>
          </a>

          {/* Sidebar content */}
          <div className="sidebar">

            {/* MENU */}
            <nav className="mt-2">
              <ul
                className="nav nav-pills nav-sidebar flex-column"
                data-widget="treeview"
                role="menu"
                data-accordion="false"
              >

                <li className="nav-item">
                  <a href="/" className="nav-link active">
                    <i className="nav-icon fas fa-tachometer-alt"></i>
                    <p>Dashboard</p>
                  </a>
                </li>

                <li className="nav-item">
                  <a href="/users" className="nav-link">
                    <i className="nav-icon fas fa-users"></i>
                    <p>Users</p>
                  </a>
                </li>

                <li className="nav-item">
                  <a href="#" className="nav-link" onClick={handleLogout}>
                    <i className="nav-icon fas fa-cog"></i>
                    <p>Logout</p>
                  </a>
                </li>

              </ul>
            </nav>

          </div>
        </aside>
        </div>
        <div className="content col-10">
        {children}
        </div>

        </div>

     
  )
}
