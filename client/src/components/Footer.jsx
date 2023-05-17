import React from 'react'
import styles from"../styles/Footer.module.scss"
import {ecommerceCategories} from "../data/categorieData"
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';  
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function Footer() {
    return (
    <>
    <div className={styles['footer-container']}>
    {ecommerceCategories.map((category)=>(
        <div className={styles['category-container']}>
            <Link to={category.title} className={styles['category']}>{category.title}</Link>
            <ul>
                {category.subcategories.map((subcategory,index)=>(
                    
                    <Link to={subcategory}><li key={index}>{subcategory}</li></Link>
                ))}
            </ul>
        </div>
    ))}
    </div>
    <div className={styles['sub-footer']}>
                    <div className={styles['sub-footer-content']}>
                        <text>
                        Email Us : 
                        </text>
                        <text>
                            Itexc Agency Founded 2019
                        </text>
                        <div>
                <label htmlFor="languageSelect" className={styles['label']}>Language:</label>
                     <select id="languageSelect"className={styles['select']}>
                      <option value="en">English</option>
                      <option value="es">عربية</option>
                      <option value="fr">Français</option>
                    </select>
                 </div>

                    </div>
                    <div >
                    <div className={styles['sub-footer-connect']}>
                    <h3>Connect with Us</h3>
                    
                    <div>
                    <Link to="https://www.facebook.com/itexc.agency/"><FacebookIcon className={styles['sub-footer-icons']}></FacebookIcon></Link>
                    <Link to="https://www.instagram.com/itexc.agency/"><InstagramIcon className={styles['sub-footer-icons']}></InstagramIcon></Link>
                    <Link to="https://www.linkedin.com/company/itexcagency/"><LinkedInIcon className={styles['sub-footer-icons']}></LinkedInIcon> </Link>
                    </div></div>
                    </div>
    </div>
    </>
  )
}

export default Footer
