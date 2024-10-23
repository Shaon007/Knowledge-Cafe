import profile from '../../assets/images/profile.png'

const Header = () => {
  return (
    <div className='flex justify-between items-center p-4 mx-4 border-b-2'>
      <h2 className="text-6xl text-red-600">Knowledge Cafe </h2>
      <img src={profile} alt="" />
    </div>
  );
};

export default Header;