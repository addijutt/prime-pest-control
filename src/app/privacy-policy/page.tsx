import type { Metadata } from 'next';
import WhyChooseUsSidebar from '../../components/sections/WhyChooseUsSidebar';
import PillCta from '../../components/ui/PillCta';
import { noBreakPhone } from '../../utils/formatPhone';

export const metadata: Metadata = {
  title: 'Privacy Policy | Prime Pest Control Dubai',
  description:
    'Privacy Policy for Prime Pest Control Dubai. Learn how we collect, use, and protect your personal information.',
  alternates: { canonical: 'https://www.primepestcontrol.ae/privacy-policy' },
};

const PHONE = '055 304 5256';
const PHONE_RAW = '+971553045256';

export default function PrivacyPolicyPage() {
  return (
    <>
      <div id="hero" className="legal-hero" />

      <section className="legal-page-section">
        <div className="legal-page-section__inner">
          <div className="legal-page-layout">
            <aside className="legal-page-layout__sidebar">
              <WhyChooseUsSidebar />
            </aside>

            <div className="legal-page-layout__content privacy">
              <h2>Privacy &amp; Terms</h2>
              <p className="text-lg"><strong>Last updated on September 30, 2025</strong></p>

              <h3>1. Privacy &amp; Terms</h3>
              <p>
                1.1. This Privacy Policy describes our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
              </p>
              <p>
                1.2. We use Your Personal Data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
              </p>
              <p>
                1.3. Prime Pest Control Pest Control (&ldquo;us&rdquo;, &ldquo;we&rdquo;, or &ldquo;our&rdquo;) operates the primepestcontrol.ae website (the &ldquo;Service&rdquo;).
              </p>

              <h3>2. Interpretation and Definitions</h3>
              <h4>2.1. Interpretation</h4>
              <p>
                2.1.1. The words of which the initial letter is capitalized have meanings defined under the following conditions.
              </p>
              <p>
                2.1.2. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
              </p>
              <h4>2.2. Definitions</h4>
              <p>For the purposes of this Privacy Policy:</p>
              <p>
                2.2.1. <strong>You</strong> means the individual accessing or using the Service, or the company or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.
              </p>
              <p>
                2.2.2. <strong>Company</strong> (referred to as either &ldquo;the Company&rdquo;, &ldquo;We&rdquo;, &ldquo;Us&rdquo; or &ldquo;Our&rdquo; in this Agreement) refers to:<br />
                Nexus Quant Labs Ltd.<br />
                Svoboda, 3<br />
                Petrich, Blagoevgrad<br />
                Bulgaria 2850<br />
                Email: <a href="mailto:info@primepestcontrol.ae">info@primepestcontrol.ae</a>
              </p>
              <p>
                2.2.3. <strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party, where &ldquo;control&rdquo; means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.
              </p>
              <p>2.2.4. <strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.</p>
              <p>2.2.5. <strong>Website</strong> refers to Prime Pest Control Pest Control, accessible from primepestcontrol.ae.</p>
              <p>2.2.6. <strong>Service</strong> refers to the Website.</p>
              <p>2.2.7. <strong>Country</strong> refers to: Bulgaria.</p>
              <p>
                2.2.8. <strong>Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.
              </p>
              <p>
                2.2.9. <strong>Third-party Social Media Service</strong> refers to any website or any social network website through which a User can log in or create an account to use the Service.
              </p>
              <p>
                2.2.10. <strong>Personal Data</strong> is any information that relates to an identified or identifiable individual. For the purposes of the CCPA, Personal Data means any information that identifies, relates to, describes or is capable of being associated with, or could reasonably be linked, directly or indirectly, with You.
              </p>
              <p>
                2.2.11. <strong>Cookies</strong> are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.
              </p>
              <p>
                2.2.12. <strong>Usage Data</strong> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).
              </p>
              <p>
                2.2.13. <strong>Do Not Track (DNT)</strong> is a concept that has been promoted by US regulatory authorities, in particular the U.S. Federal Trade Commission (FTC), for the Internet industry to develop and implement a mechanism for allowing internet users to control the tracking of their online activities across websites.
              </p>
              <p>
                2.2.14. <strong>Business</strong>, for the purpose of the CCPA (California Consumer Privacy Act), refers to the Company as the legal entity that collects Consumers&apos; personal information and determines the purposes and means of the processing of Consumers&apos; personal information, or on behalf of which such information is collected and that alone, or jointly with others, determines the purposes and means of the processing of consumers&apos; personal information, that does business in the State of California.
              </p>
              <p>
                2.2.15. <strong>Consumer</strong>, for the purpose of the CCPA (California Consumer Privacy Act), means a natural person who is a California resident.
              </p>
              <p>
                2.2.16. <strong>Sale</strong>, for the purpose of the CCPA (California Consumer Privacy Act), means selling, renting, releasing, disclosing, disseminating, making available, transferring, or otherwise communicating orally, in writing, or by electronic or other means, a Consumer&apos;s Personal information to another business or a third party for monetary or other valuable consideration.
              </p>

              <h3>3. Marketing Disclosure</h3>
              <p>3.1. This website is a group advertisement and a fee is paid for by participating advocates. primepestcontrol.ae is not a licensed contractor and this website in no way is intended to suggest that it offers contracting services.</p>
              <p>3.2. Prime Pest Control Pest Control provides a matching service only and is not acting as a representative, agent, or correspondent for any service provider we contract with.</p>
              <p>3.3. This service is not available in all areas and the service availability and scope are subject to change without notice.</p>
              <p>3.4. This website is a marketplace. As such you should know that the owner has a monetary connection to the products &amp; services advertised on the site. The owner receives payment whenever a qualified lead is referred, but that is the extent of it. The owner receives no further compensation of any kind should you choose to obtain services.</p>
              <p>3.5. Companies and contractors connected to this website operate on a lead generation basis and are not affiliated with primepestcontrol.ae in any other way.</p>
              <p>3.6. All repairs, servicing and installations are to be handled by a third party contractor of your choosing. No money is paid from primepestcontrol.ae to contractors for repair, servicing or installation of your unit and no money is paid to primepestcontrol.ae on behalf of contractors for repair, servicing or installation of your unit.</p>
              <p>3.7. The customer is required to pay all repair, servicing or installation costs directly to the contractor it has chosen.</p>
              <p>3.8. All of the information regarding the goods and services mentioned on this website is provided by the owner. The owner does not recommend or endorse any product or service advertised on this website.</p>
              <p>3.9. The owner does not endorse any particular company. Each partner has different qualifications. When contacting one of our partners, be sure to inquire about their individual qualifications.</p>
              <p>3.10. Prime Pest Control Pest Control is a FREE service that helps homeowners connect with local service contractors. Our mission is to help you quickly and easily connect with local contractors so you can save time and make the best choice for your project.</p>
              <p>3.11. All contractors are independent and Prime Pest Control Pest Control does not warrant or guarantee any work performed. It is the responsibility of the homeowner to verify the contractor that they hire has the necessary license and insurance required for the work being performed.</p>
              <p>3.12. All persons depicted in any photo or video appearing on this Website are actors or models. They are not representative of, nor are they contractors listed on or affiliated with primepestcontrol.ae.</p>
              <p>3.13. Any partner, contractor, or third party that receives Your contact information through our Service is solely and independently responsible for their own compliance with all applicable federal, state, and local laws and regulations governing telecommunications and marketing communications, including but not limited to the Telephone Consumer Protection Act (TCPA). Nexus Quant Labs Ltd. assumes no liability for any communications made by such independent third parties to You following the transfer of Your contact information.</p>

              <h3>4. Compensation</h3>
              <p>4.1. You should assume that we may be compensated for purchases of products or services mentioned on this website that are not created, owned, licensed, or otherwise materially controlled by us.</p>
              <p>4.2. Stated differently, while most people obviously understand that individuals make a living by way of the profit that remains after the costs associated with providing their product or service are covered, at least theoretically there may be someone out there who does not understand that a third party can &ldquo;affiliate&rdquo; someone else&apos;s products or services and be compensated by the product or service creator/owner for helping spread the word about their offering.</p>
              <p>4.3. Just compare it to retailers. They seldom produce anything, but rather make their money connecting product and service creators with end users.</p>

              <h3>5. Phone Calls, Caller ID and Electronic Messages</h3>
              <p>5.1. When making a phone call through Prime Pest Control Pest Control or one of its referral partners, the caller ID may be passed to partners in our network.</p>
              <p>5.2. All calls are recorded.</p>
              <p>5.3. By using our network, you agree to receive, or opt-in, to various forms of electronic communications, including but not limited to e-mails and text messages.</p>
              <p>5.4. You can opt out at any time by filling out our contact form (see Section 26).</p>
              <h4>5.5. Consent to Receive Automated SMS/Calls</h4>
              <p>By calling us or submitting your phone number via our website or lead form, You expressly consent in writing to be contacted by Nexus Quant Labs Ltd. and/or their partner sites/parties using automated telephone dialing systems, prerecorded or artificial voice messages, and/or SMS text messages, regarding any products and/or services You have previously inquired about or purchased, as well as products and/or services that Nexus Quant Labs Ltd. may market to You. You acknowledge that:</p>
              <p>5.5.1. This consent is not a condition of any purchase or use of our Service.</p>
              <p>5.5.2. Calls and messages may be made using an automated dialing system or prerecorded messages.</p>
              <p>5.5.3. Standard message and data rates may apply depending on your carrier and plan.</p>
              <p>5.5.4. This consent may be revoked at any time by replying STOP to any SMS message received, or by contacting us via the methods outlined in Section 26.</p>

              <h3>6. Professional Consultation</h3>
              <p>6.1. Many products and services are designed to solve problems. Common problem areas include legal, financial, and medical.</p>
              <p>6.2. We are in no way purporting to counsel you on issues related law, finances, or health. If you require guidance in these arenas, you should consider securing your own counsel from lawyers, accountants, tax professionals, investment advisors, or medical professionals before taking any action.</p>
              <p>6.3. Nothing we may ever communicate, in print or spoken word, will ever be intended to constitute any such counsel, as we do not claim to be professionals in any of those disciplines.</p>
              <p>6.4. You assume all risk for actions taken, losses incurred, damages sustained, or other issues stemming from your use of any product or service in any way connected with or mentioned on this website.</p>
              <p>6.5. Indeed, such decision is solely your own, or else determined in conjunction with the professional guidance of the advisor of your choosing.</p>

              <h3>7. Types of Data Collected</h3>
              <h4>7.1. Personal Data</h4>
              <p>7.1.1. While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You.</p>
              <p>7.1.2. Personally identifiable information may include, but is not limited to:</p>
              <ul>
                <li>Email address</li>
                <li>First name and last name</li>
                <li>Phone number</li>
                <li>Address, State, Province, ZIP/Postal code, City</li>
                <li>Phone call recording</li>
                <li>Usage Data</li>
              </ul>
              <h4>7.2. Usage Data</h4>
              <p>7.2.1. Usage Data is collected automatically when using the Service.</p>
              <p>7.2.2. Usage Data may include information such as Your Device&apos;s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>
              <p>7.2.3. When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.</p>
              <p>7.2.4. We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.</p>

              <h3>8. Tracking Technologies and Cookies</h3>
              <p>8.1. We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information.</p>
              <p>8.2. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service.</p>
              <p>8.3. You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of our Service.</p>
              <p>8.4. Cookies can be &ldquo;Persistent&rdquo; or &ldquo;Session&rdquo; Cookies. Persistent Cookies remain on your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close your web browser.</p>
              <h4>8.5. Types of Cookies We Use</h4>
              <p><strong>8.5.1. Necessary / Essential Cookies</strong><br />Type: Session Cookies<br />Administered by: Us<br />Purpose: These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features.</p>
              <p><strong>8.5.2. Cookies Policy / Notice Acceptance Cookies</strong><br />Type: Persistent Cookies<br />Administered by: Us<br />Purpose: These Cookies identify if users have accepted the use of cookies on the Website.</p>
              <p><strong>8.5.3. Functionality Cookies</strong><br />Type: Persistent Cookies<br />Administered by: Us<br />Purpose: These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference.</p>
              <p><strong>8.5.4. Tracking and Performance Cookies</strong><br />Type: Persistent Cookies<br />Administered by: Third-Parties<br />Purpose: These Cookies are used to track information about traffic to the Website and how users use the Website.</p>
              <p>8.6. In addition, you can visit industry opt-out pages to manage targeted advertising preferences.</p>

              <h3>9. Use of Your Personal Data</h3>
              <p>The Company may use Personal Data for the following purposes:</p>
              <p>9.1.1. To provide and maintain our Service, including to monitor the usage of our Service.</p>
              <p>9.1.2. To manage Your Account: to manage Your registration as a user of the Service.</p>
              <p>9.1.3. For the performance of a contract: the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.</p>
              <p>9.1.4. To contact You: To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication.</p>
              <p>9.1.5. To provide You with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.</p>
              <p>9.1.6. To manage Your requests: To attend and manage Your requests to Us.</p>
              <h4>9.2. Sharing of Personal Data</h4>
              <p>We may share your personal information in the following situations:</p>
              <p>9.2.1. <strong>With Service Providers:</strong> We may share Your personal information with Service Providers to monitor and analyze the use of our Service, to show advertisements to You to help support and maintain Our Service, to contact You, to advertise on third party websites to You after You visited our Service or for payment processing.</p>
              <p>9.2.2. <strong>For Business transfers:</strong> We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of our business to another company.</p>
              <p>9.2.3. <strong>With Affiliates:</strong> We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy.</p>
              <p>9.2.4. <strong>With Business partners:</strong> We may share Your information with Our business partners to offer You certain products, services or promotions.</p>
              <p>9.2.5. <strong>With other users:</strong> When You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside.</p>

              <h3>10. Retention of Your Personal Data</h3>
              <p>10.1. The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy.</p>
              <p>10.2. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.</p>
              <p>10.3. The Company will also retain Usage Data for internal analysis purposes.</p>

              <h3>11. Transfer of Your Personal Data</h3>
              <p>11.1. Your information, including Personal Data, is processed at the Company&apos;s operating offices and in any other places where the parties involved in the processing are located.</p>
              <p>11.2. This means that this information may be transferred to and maintained on computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.</p>
              <p>11.3. Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.</p>
              <p>11.4. The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy.</p>

              <h3>12. Disclosure of Your Personal Data</h3>
              <h4>12.1. Business Transactions</h4>
              <p>12.1.1. If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred.</p>
              <p>12.1.2. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.</p>
              <h4>12.2. Law Enforcement</h4>
              <p>12.2.1. Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).</p>
              <h4>12.3. Other Legal Requirements</h4>
              <p>The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:</p>
              <p>12.3.1. Comply with a legal obligation</p>
              <p>12.3.2. Protect and defend the rights or property of the Company</p>
              <p>12.3.3. Prevent or investigate possible wrongdoing in connection with the Service</p>
              <p>12.3.4. Protect the personal safety of Users of the Service or the public</p>
              <p>12.3.5. Protect against legal liability</p>

              <h3>13. Security of Your Personal Data</h3>
              <p>13.1. The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure.</p>
              <p>13.2. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.</p>

              <h3>14. Detailed Information on the Processing of Your Personal Data</h3>
              <p>14.1. Service Providers have access to Your Personal Data only to perform their tasks on Our behalf and are obligated not to disclose or use it for any other purpose.</p>

              <h3>15. Analytics</h3>
              <p>15.1. We may use third-party Service providers to monitor and analyze the use of our Service.</p>
              <p>15.2. Google Analytics is a web analytics service offered by Google that tracks and reports website traffic.</p>
              <p>15.3. You can opt-out of having made your activity on the Service available to Google Analytics by installing the Google Analytics opt-out browser add-on.</p>
              <p>15.4. For more information on the privacy practices of Google, please visit: <a href="https://policies.google.com/privacy?hl=en" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy?hl=en</a></p>
              <p>15.5. Clicky is a web analytics service. Read the Privacy Policy for Clicky here: <a href="https://clicky.com/terms" target="_blank" rel="noopener noreferrer">https://clicky.com/terms</a></p>

              <h3>16. Email Marketing</h3>
              <p>16.1. We may use Your Personal Data to contact You with newsletters, marketing or promotional materials and other information that may be of interest to You.</p>
              <p>16.2. You may opt-out of receiving any, or all, of these communications from Us by following the unsubscribe link or instructions provided in any email We send or by contacting Us.</p>
              <p>16.3. We may use Email Marketing Service Providers to manage and send emails to You.</p>

              <h3>17. Behavioral Remarketing</h3>
              <p>17.1. The Company uses remarketing services to advertise on third party websites to You after You visited our Service.</p>
              <p>17.2. We and Our third-party vendors use cookies to inform, optimize and serve ads based on Your past visits to our Service.</p>
              <p>17.3. Google Ads (AdWords) remarketing service is provided by Google Inc. You can opt-out of Google Analytics for Display Advertising by visiting: <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">https://www.google.com/settings/ads</a></p>
              <p>17.4. Microsoft (Bing) Ads Remarketing service is provided by Microsoft Inc. Learn more: <a href="https://privacy.microsoft.com/en-us/PrivacyStatement" target="_blank" rel="noopener noreferrer">https://privacy.microsoft.com/en-us/PrivacyStatement</a></p>
              <p>17.5. Twitter remarketing service is provided by Twitter Inc. Opt-out: <a href="https://support.twitter.com/articles/20170405" target="_blank" rel="noopener noreferrer">https://support.twitter.com/articles/20170405</a></p>
              <p>17.6. Facebook adheres to the Self-Regulatory Principles for Online Behavioural Advertising established by the Digital Advertising Alliance. You can also opt-out from Facebook and other participating companies through: USA: <a href="http://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer">http://www.aboutads.info/choices/</a></p>
              <p>17.7. You may also opt out using your mobile device settings.</p>

              <h3>18. CCPA Privacy – Your Rights under the CCPA</h3>
              <p>If You are a resident of California, You have the following rights:</p>
              <p>18.1. <strong>The right to notice</strong> – You must be properly notified which categories of Personal Data are being collected and the purposes for which the Personal Data is being used.</p>
              <p>18.2. <strong>The right to access / the right to request</strong> – You may request and obtain from the Company information regarding the disclosure of Your Personal Data that has been collected in the past 12 months.</p>
              <p>18.3. <strong>The right to say no to the sale of Personal Data</strong> – You have the right to ask the Company not to sell Your Personal Data to third parties.</p>
              <p>18.4. <strong>The right to know about Your Personal Data</strong> – You have the right to request and obtain from the Company information regarding the disclosure of your personal data categories, sources, purposes, and specific pieces collected.</p>
              <p>18.5. <strong>The right to delete Personal Data</strong> – You also have the right to request the deletion of Your Personal Data that have been collected in the past 12 months.</p>
              <p>18.6. <strong>The right not to be discriminated against</strong> – You have the right not to be discriminated against for exercising any of Your Consumer&apos;s rights.</p>
              <ul>
                <li>Denying goods or services to You</li>
                <li>Charging different prices or rates for goods or services, including the use of discounts or other benefits or imposing penalties</li>
                <li>Providing a different level or quality of goods or services to You</li>
                <li>Suggesting that You will receive a different price or rate for goods or services or a different level or quality of goods or services.</li>
              </ul>

              <h3>19. Exercising Your CCPA Data Protection Rights</h3>
              <p>19.1. In order to exercise any of Your rights under the CCPA, and if you are a California resident, You can email or call us or visit our &ldquo;Do Not Sell My Personal Information&rdquo; section or web page.</p>
              <p>19.2. The Company will disclose and deliver the required information free of charge within 45 days of receiving Your verifiable request.</p>
              <p>19.3. The time period to provide the required information may be extended once by an additional 45 days when reasonably necessary and with prior notice.</p>

              <h3>20. Do Not Sell My Personal Information</h3>
              <p>20.1. We do not sell personal information. However, the Service Providers we partner with (for example, our advertising partners) may use technology on the Service that &ldquo;sells&rdquo; personal information as defined by the CCPA law.</p>
              <p>20.2. If you wish to opt out of the use of your personal information for interest-based advertising purposes and these potential sales as defined under CCPA law, you may do so by following the instructions below.</p>
              <p>20.3. Please note that any opt out is specific to the browser You use. You may need to opt out on every browser that you use.</p>
              <p>20.4. <strong>Website:</strong> You can opt out of receiving ads that are personalized as served by our Service Providers by following our instructions presented on the Service:</p>
              <ul>
                <li>From our &ldquo;Do Not Sell My Info&rdquo; link</li>
                <li>By our contact form: <a href="https://www.primepestcontrol.ae/contact-us" target="_blank" rel="noopener noreferrer">https://www.primepestcontrol.ae/contact-us</a></li>
                <li>By mail: Nexus Quant Labs Ltd., Svoboda, 3, Petrich, Blagoevgrad, Bulgaria 2850</li>
              </ul>
              <p>20.5. The opt out will place a cookie on Your computer that is unique to the browser You use to opt out.</p>
              <p>20.6. <strong>Mobile Devices:</strong> Your mobile device may give you the ability to opt out of the use of information about the apps you use in order to serve you ads that are targeted to your interests:</p>
              <ul>
                <li>&ldquo;Opt out of Interest-Based Ads&rdquo; or &ldquo;Opt out of Ads Personalization&rdquo; on Android devices</li>
                <li>&ldquo;Limit Ad Tracking&rdquo; on iOS devices</li>
              </ul>
              <p>20.7. You can also stop the collection of location information from Your mobile device by changing the preferences on your mobile device.</p>

              <h3>21. &ldquo;Do Not Track&rdquo; Policy as Required by CalOPPA</h3>
              <p>21.1. Our Service does not respond to Do Not Track signals.</p>
              <p>21.2. However, some third party websites do keep track of Your browsing activities. If You are visiting such websites, You can set Your preferences in Your web browser to inform websites that You do not want to be tracked.</p>
              <p>21.3. You can enable or disable DNT by visiting the preferences or settings page of Your web browser.</p>

              <h3>22. Children&apos;s Privacy</h3>
              <p>22.1. Our Service does not address anyone under the age of 13.</p>
              <p>22.2. We do not knowingly collect personally identifiable information from anyone under the age of 13.</p>
              <p>22.3. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us.</p>
              <p>22.4. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers.</p>
              <p>22.5. We also may limit how We collect, use, and store some of the information of Users between 13 and 18 years old.</p>
              <p>22.6. If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent&apos;s consent before We collect and use that information.</p>

              <h3>23. Links to Other Websites</h3>
              <p>23.1. Our Service may contain links to other websites that are not operated by Us.</p>
              <p>23.2. If You click on a third party link, You will be directed to that third party&apos;s site. We strongly advise You to review the Privacy Policy of every site You visit.</p>
              <p>23.3. We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>

              <h3>24. Changes to this Privacy Policy</h3>
              <p>24.1. We may update our Privacy Policy from time to time.</p>
              <p>24.2. We will notify You of any changes by posting the new Privacy Policy on this page.</p>
              <p>24.3. We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the &ldquo;Last updated&rdquo; date at the top of this Privacy Policy.</p>
              <p>24.4. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>

              <h3>25. Errors, Corrections and Changes</h3>
              <p>25.1. We do not represent or otherwise warrant that our Website will be error-free, free from viruses or other harmful components, or that we will correct any errors.</p>
              <p>25.2. We do not represent or otherwise warrant that the information available on or through our Website will be correct, accurate, timely or otherwise reliable.</p>
              <p>25.3. We may make changes to the features, functionality or content of our Website or Services at any time.</p>
              <p>25.4. We reserve the right in our sole discretion to edit or remove any documents, information or other content appearing on our Website or Services.</p>

              <h3>26. Contact Us</h3>
              <p>If you have any questions about this Privacy Policy, You can contact us:</p>
              <p>26.1. <strong>By our contact form:</strong><br /><a href="https://www.primepestcontrol.ae/contact-us" target="_blank" rel="noopener noreferrer">https://www.primepestcontrol.ae/contact-us</a></p>
              <p>26.2. <strong>By email:</strong><br /><a href="mailto:info@primepestcontrol.ae">info@primepestcontrol.ae</a></p>
              <p>26.3. <strong>By mail:</strong><br />Nexus Quant Labs Ltd.<br />Svoboda, 3<br />Petrich, Blagoevgrad<br />Bulgaria 2850</p>

              <h3>27. GDPR – European Data Protection</h3>
              <p>
                As a company registered and operating within the European Union, Nexus Quant Labs Ltd. is committed to compliance with the General Data Protection Regulation (EU) 2016/679 (&ldquo;GDPR&rdquo;). We process Your personal data only where a lawful basis exists, including Your consent, the performance of a contract, or our legitimate business interests. You have the right to access, rectify, erase, restrict, or object to the processing of Your personal data, as well as the right to data portability. To exercise any of these rights, please contact us using the details in Section 26. You also have the right to lodge a complaint with your local data protection authority. We do not transfer Your personal data outside of the European Economic Area without appropriate safeguards in place, except where necessary to provide our Service and in accordance with applicable law.
              </p>

              <div className="legal-page-layout__cta">
                <PillCta href={`tel:${PHONE_RAW}`} className="dynamic-href">
                  <span className="theme-pill-cta__text dynamic-phone">Call For Free Estimate: {noBreakPhone(PHONE)}</span>
                  <span className="theme-pill-cta__arrow" aria-hidden="true">→</span>
                </PillCta>
                <p>
                  <a href="/contact-us">Call Us for a Free Estimate</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}