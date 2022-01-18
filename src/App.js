import NotesArchive from './components/Notes/NotesArchive';
import { useState } from 'react';
import NotesMainList from './components/Notes/NotesMainList';
import Summary from './components/Summary/Summary';

function App() {
  const [isArchive, setArchive] = useState(false)
  const hideArchive = () => setArchive(false)
  const showArchive = () => setArchive(true)
  return <div className="notes w-100 container">
    {isArchive ? <NotesArchive hideArchive={hideArchive} /> 
    : <NotesMainList showArchive={showArchive} />}
    <Summary />
  </div>

}

export default App;
