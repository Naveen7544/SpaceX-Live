import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: 'rgb(239, 239, 239)',
    color: '#fff',
    padding: '16px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'fixed', 
    width: '100%',
    top: 0,
    zIndex: 1000, 
    
    
  },
 
};

export default Header;
