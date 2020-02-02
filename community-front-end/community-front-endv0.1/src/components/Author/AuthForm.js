// import React from 'react';
// import styled from 'styled-components';
// import {Link} from 'react-router-dom';


// /* 회원가입 또는 로그인 폼을 보여준다 */

// const AuthFormBlock = styled.div`
// h3 {
//     margin: 0;
//     color: #495057;
//     margin-buttom: 1rem;
//     }
// `;

// const StyledInput = styled.input`
// font-size: 1rem;
// border: none;
// border-bottom: 1px solid #ccc;
// padding-bottom: 0.5rem;
// outline: none;
// width: 100%;
// &:focus {
//     color: $oc-teal-7;
//     border-bottom: 1px solid #ccc;
// }

// &+& {
//     margin-top: 1rem;
// }
// `;
// /* 폼 하단에 로그인 혹은 회원가입 링크를 보여줌 */

// const Footer = styled.div`
// margin-top: 2rem;
// text-align: right;
// a {
//     color: #adb5bd;
//     text-decoration: underline;
//     &:hover {
//         color: #343a40;
//     }
// }
// `;

// const ButtonWithMarginTop = styled.button`
//     margin-top: 1rem;
// `

// const textMap = {
//     login: '로그인',
//     register: '회원가입',
// };

// const AuthForm = ({ type, form, onChange, onSubmit }) => {
//     const text = textMap[type];
//     return (
//         <AuthFormBlock>
//             <h3>{text}</h3>
//             <form onSubmit={onSubmit}>
//                 <StyledInput 
//                     autoComplete="username"
//                     name="username" 
//                     placeholder="아이디"
//                     onChange={onChange}
//                     value={form.username}
//                 />
//                 <StyledInput
//                     autoComplete="new-password"
//                     name="password"
//                     placeholder="비밀번호"
//                     type="password"
//                     onChange={onChange}
//                     value={form.password}
//                 />
//                 {type === 'register' && (
//                     <StyledInput
//                         autoComplete="new-password"
//                         name="passwordConfirm"
//                         placeholder="비밀번호 확인"
//                         type="password"
//                         onChange={onChange}
//                         value={form.passwordConfirm}
//                     />
//                 )}
                
//                 <form action="" method="POST" role="form">
//                     <legend>Form title</legend>
                
//                     <div class="form-group">
//                         <label for="">label</label>
//                         <input type="text" class="form-control" id="" placeholder="Input field">
//                     </div>
                
                    
                
//                     <button type="submit" class="btn btn-primary">Submit</button>
//                 </form>
                
//                 <ButtonWithMarginTop cyan fullWidth>
//                     {text}
//                 </ButtonWithMarginTop>
//             </form>
//             <Footer>
//                 {type === 'login' ? (
//                     <Link to="/register">회원가입</Link>
//                 ) : (
//                     <Link to="/login">로그인</Link>
//                 )}
//             </Footer>
//         </AuthFormBlock>
//     );
// };

// export default AuthForm;

