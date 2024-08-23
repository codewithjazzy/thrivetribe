import headerLogo from "../assets/headerLogo.png"


export const HeaderLogo = () => {
    return (
      <img 
        src={headerLogo}
        alt="Header Logo" 
        style={{height: "70%", borderRadius: "5%"}}
      />)
  };