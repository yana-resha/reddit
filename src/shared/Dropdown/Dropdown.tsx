import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import styles from './dropdown.css';

interface IDropdownProps{
  button: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

const NOOP = () => {};




export function Dropdown({button, children, isOpen, onClose = NOOP, onOpen = NOOP}: IDropdownProps) {
  const [isDropdownPosition, setIsDropdownPosition] = React.useState({top: '0px', right: '0px'});
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen);
  const ref = useRef<HTMLDivElement>(null);
  React.useEffect(() => setIsDropdownOpen(isOpen), [isOpen])
  React.useEffect(() => isDropdownOpen ? onOpen(): onClose(), [isDropdownOpen])

  React.useEffect(() => {
    function dropdownClose (event:MouseEvent) {
      if (event.target instanceof Node && !ref.current?.contains(event.target)) {
        setIsDropdownOpen(false)
      }
    }
    document.addEventListener('click', dropdownClose)
    return () => {
      document.removeEventListener('click', dropdownClose)
    }
  }, [])

  function handleOpen (event:any): void {
    if (event.target instanceof Node && ref.current?.contains(event.target)) {
      
      setIsDropdownPosition({top:`${event.target.getBoundingClientRect().bottom + 20 + window.scrollY}px`,
      right: `${event.target.getBoundingClientRect().left - 80}px`})
    }

    if (isOpen === undefined) {
      setIsDropdownOpen(!isDropdownOpen)
    }
  }

  const node = document.querySelector('#dropdown-root');
  if (!node) return null;
  return (
    <div className={styles.container}>
      <div onClick={handleOpen} ref={ref}>
        {button}
        {isDropdownOpen && ReactDOM.createPortal((
          <div className={styles.listContainer} style={{position: 'absolute', top: isDropdownPosition.top,
           left: isDropdownPosition.right}}>
            <div className={styles.list} onClick={() => setIsDropdownOpen(false)}>
              {children}
            </div>
          </div>
        ), node)}
      </div>
    </div>
  );

}
