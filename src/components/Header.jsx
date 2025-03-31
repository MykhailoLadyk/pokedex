export function Header(props) {
  const { handleShowSideMenu } = props;
  return (
    <header>
      <button
        onClick={() => {
          handleShowSideMenu();
        }}
        className='open-nav-button'
      >
        <i className='fa-solid fa-bars'></i>
      </button>
      <h1 className='text-gradient'>Pokédex</h1>
    </header>
  );
}
