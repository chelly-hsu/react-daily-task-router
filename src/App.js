import './App.css';
import {
  HashRouter,
  NavLink,
  Outlet,
  Route,
  Routes,
  useNavigate,
  useParams,
} from 'react-router-dom';

const Todo = () => {
  return <>
    <p>這是 Todo 頁面 </p> 
    <Logout/>
  </>
};
const Logout = () => {
  let navigate = useNavigate();
  return <input type="button" value="LOGOUT" onClick={ ()=>navigate('/login') }/>
}
const Login = () => {
  return <p>這是登入頁面</p>;
};
const Register = () => {
  return <p>這是註冊頁面</p>;
};
const Post = () => {
  return <>
      <p><b>Post頁面</b></p>
      <Outlet />
    </>
}
const PostId = () => {
  let pathParams = useParams();
  return <p>Post ID: {pathParams.postId}</p>
}

function App() {
  return (
    <div className="container">
      <HashRouter>
        <div className="nav-link">
          <NavLink to="/">
            <p>回到首頁</p>
          </NavLink>
          <NavLink to="/register">
            <p>註冊頁面</p>
          </NavLink>
          <NavLink to="/login">
            <p>登入頁面</p>
          </NavLink>
          <NavLink to="/todo">
            <p>Todo 頁面</p>
          </NavLink>
          <NavLink to="/post/post123" >
            <p>Post 詳細頁面</p>
          </NavLink>
        </div>
        <Routes>
          <Route path="/" element={<p>這是首頁</p>} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="todo" element={<Todo />} />
          <Route path="post" element={<Post />} >
            <Route path=":postId" element={<PostId />} />
          </Route>
        </Routes>
        {/* 練習區 */}
      </HashRouter>
    </div>
  );
}

export default App;
