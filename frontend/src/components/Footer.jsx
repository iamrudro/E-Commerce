import React from 'react';
import { Phone, Mail, GitHub, LinkedIn, YouTube, Instagram } from '@mui/icons-material';
import '../componentStyles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Section 1 */}
                <div className="footer-section contact">
                    <h3>Contact Us</h3>
                    <p><Phone fontSize='small' />Phone: +919635537203</p>
                    <p><Mail fontSize='100' />Email: rudranil.das9900@gmail.com</p>
                </div>

                {/* Section 2 */}
                <div className="footer-section social">
                    <h3>Follow me</h3>
                    <div className="social-links">
                        <a href="https://github.com/iamrudro" target="_blank">
                            <GitHub className='social-icon' />
                        </a>
                        <a href="https://www.linkedin.com/in/rudranildas09/" target="_blank">
                            <LinkedIn className='social-icon' />
                        </a>
                        <a href="" target="_blank">
                            <YouTube className='social-icon' />
                        </a>
                        <a href="" target="_blank">
                            <Instagram className='social-icon' />
                        </a>
                    </div>
                </div>

                {/* Section 3 */}
                <div className="footer-section about">
                    <h3>About</h3>
                    <p>Providing E-Commerce facility with ease</p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2025 RudranilDas .  All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer
