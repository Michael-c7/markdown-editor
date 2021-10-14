import React from 'react'
import ReactMarkdown from 'react-markdown'

function App() {
  const [text, setText] = React.useState("# markdown preview")
  const onChange = (event) => setText(event.target.value); 

  return (
    <div className="App">
      <header className="header">
        <h1>Markdown Editor</h1>
        <a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet" rel="noreferrer" target="_blank">Link to a markdown guide</a>
      </header>

     <div className="markdown-container">
        <textarea className="markdown-editor" value={text} onChange={onChange}></textarea>
        <p className="markdown-text">
          <ReactMarkdown>{text}</ReactMarkdown>
        </p>
     </div>
    </div>
  );
}

export default App;
