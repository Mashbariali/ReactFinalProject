import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';
import './Style.css'
export default function footer() {
  return (
    <div className='footer'>
    <MDBFooter bgColor='primary' className='text-center text-lg-left '>
      <div className='text-center p-3' style={{ backgroundColor: 'rgb(209,236,255)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-dark' href='https://mdbootstrap.com/'>
          Sea.com
        </a>
      </div>
    </MDBFooter>
    </div>
  );
}