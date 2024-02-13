

export default function Login() {
  localStorage.setItem('recipeUsertoken', '1234');
  return (
    <div className="h-screen bg-gradient-to-r from-slate-900 to-slate-500">
      <div className="flex justify-center items-center flex-col">
      <form className="flex flex-col">
        <label className="text-white p-2" htmlFor="email">Email</label>
        <input type="email" id="email" name="email" className="w-96 rounded-full text-white bg-slate-500 shadow-2xl p-2"/>
        <label htmlFor="password" className="text-white p-2">Password</label>
        <input type="password" id="password" name="password" className="w-96 rounded-full text-white bg-slate-500 shadow-2xl p-2"/>
        <button type="submit" className="w-20 mx-auto rounded-full my-2 text-white bg-slate-500 shadow-2xl p-2">Login</button>
      </form>
      </div>
    </div>
  )
}
