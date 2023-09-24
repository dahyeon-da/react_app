import React, { useRef, useState, useMemo, useCallback } from 'react';
import UserList from './qoffhvjxm/UserList';
import CreateUser from './qoffhvjxm/CreateUser';

function countActiveUsers(users) {
  console.log("활성 사용자 수를 세는중..");
  return users.filter(user => user.active).length;
}

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });
  const { username, email } = inputs;

  const onChange = useCallback(e => 
    {
      const { name, value } = e.target;
      setInputs(inputs => ({
        ...inputs,
        [name]: value
      }));
    }, []);
  // deps에서 inputs를 빼준다.

  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'dndhk',
      email: 'dndhk@gmail.com',
      active: true
    }, {
      id: 2,
      username: 'Lee',
      email: 'Lee@gmail.com',
      active: true
    }, {
      id: 3,
      username: 'dada',
      email: 'dada@gmail.com',
      active: true
    }
  ]);

  const nextId = useRef(4);

  const onCreate = useCallback(
    () => {
      const user = {
        id: nextId.current,
        username,
        email
      };
      setUsers([...users, user]);
      setInputs({
        username: '',
        email: ''
      });
      nextId.current += 1;
    }, [username, email]
    // deps에서 users를 빼준다.
  );

  const onRemove = useCallback(
    (id) => {
      setUsers(users.filter(user => user.id !== id));
    }, []
    // deps에서 users를 빼준다.
  );

  const onToggle = useCallback(
    id => {
      setUsers(
        users.map(user =>
          user.id === id ? { ...user, active: !user.active } : user
        )
      );
    }, [users]
  );

  const count = useMemo(() => countActiveUsers(users), [users]);
  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      ></CreateUser>
      <UserList users={users} onRemove={onRemove} onToggle={onToggle}></UserList>
      <div>활성사용자 수 : {count}</div>
    </>
  );
}

export default App;

// import TOC from "./components/TOC"
// import ReadContent from "./components/ReadContent"
// import CreateContent from "./components/CreateContent"
// import UpdateContent from "./components/UpdateContent"
// import Subject from "./components/Subject"
// import Control from "./components/Control"
// import './App.css';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.max_content_id = 3;
//     this.state = {
//       mode: 'create',
//       selected_content_id: 2,
//       subject: { title: 'WEB', sub: 'world wide web!' },
//       welcome: { title: 'welcome', desc: 'Hello React!!' },
//       contents: [
//         { id: 1, title: 'HTML', desc: 'HTML is for information' },
//         { id: 2, title: 'CSS', desc: 'CSS is for design' },
//         { id: 3, title: 'Javascript', desc: 'Javascript is for interactive' }
//       ]
//     }
//   }

//   getReadContent(){
//     var i = 0;
//       while (i < this.state.contents.length) {
//         var now_data = this.state.contents[i];
//         if (now_data.id === this.state.selected_content_id) {
//           return now_data;
//           break;
//         }
//         i = i + 1;
//       }
//   }

//   getContent(){
//     var _title, _desc, _article, _content = null;

//     if (this.state.mode === 'welcome') {
//       _title = this.state.welcome.title;
//       _desc = this.state.welcome.desc;
//       _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
//     } else if (this.state.mode === 'read') {
//       _content = this.getReadContent();
//       _article = <ReadContent title={_content.title} desc={_content.desc}></ReadContent>;
//     } else if (this.state.mode === 'create') {
//       _article = <CreateContent onSubmit={function(_title, _desc){
//         // add content to this.state.contents
//         this.max_content_id = this.max_content_id + 1;
//         // this.state.contents.push(
//         //   {id:this.max_content_id, title:_title, desc:_desc}
//         // );
//         // this.setState({
//         //   contents:this.state.contents
//         // });
//         var _contents = this.state.contents.concat(
//           {id:this.max_content_id, title:_title, desc:_desc}
//         )
//         this.setState({
//           contents:_contents
//         });
//         console.log(_title);
//         console.log(_desc);
//       }.bind(this)}></CreateContent>
//     } else if (this.state.mode === 'update') {
//       _content = this.getReadContent();
//       _article = <UpdateContent data={_content} onSubmit={function(_title, _desc){
//         // add content to this.state.contents
//         this.max_content_id = this.max_content_id + 1;
//         // this.state.contents.push(
//         //   {id:this.max_content_id, title:_title, desc:_desc}
//         // );
//         // this.setState({
//         //   contents:this.state.contents
//         // });
//         var _contents = this.state.contents.concat(
//           {id:this.max_content_id, title:_title, desc:_desc}
//         )
//         this.setState({
//           contents:_contents
//         });
//         console.log(_title);
//         console.log(_desc);
//       }.bind(this)}></UpdateContent>
//     }
//     return _article;
//   }

//   render() {
//     return (
//       <div className="App">
//         <Subject
//           title={this.state.subject.title}
//           sub={this.state.subject.sub}
//           onChangePage={function () {
//             this.setState({ mode: 'welcome' });
//           }.bind(this)}
//         >
//         </Subject>
//         <TOC
//           onChangePage={function (id) {
//             this.setState({
//               mode: 'read',
//               selected_content_id: Number(id)
//             });
//           }.bind(this)}
//           data={this.state.contents}
//         ></TOC>
//         <Control onChangeMode={function (_mode) {
//           this.setState({
//             mode: _mode
//           });
//         }.bind(this)}>
//         </Control>
//         {this.getContent()}
//       </div>
//     );
//   }
// }


