import HomeIcon from '@mui/icons-material/Home';


function Sidebar(){
  return(
    <button className="middle none center mr-3 rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"><HomeIcon color="primary" />Home</button>
  )
}
export default Sidebar