import Mailto from 'react-protected-mailto'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

import SEO from '../components/SEO'

import { getIsSsrMobile } from '../utils/mobile'
import { server } from '../utils'

export async function getServerSideProps(context) {
  const { locale } = context
  return {
    props: {
      isSsrMobile: getIsSsrMobile(context),
      ...(await serverSideTranslations(locale, ['common']))
    }
  }
}

export default function PrivacyPolicy() {
  const { t } = useTranslation()

  return (
    <>
      <SEO title={t('menu.privacy-policy')} noindex={true} />
      <div className="content-text">
        <h1>Privacy Policy</h1>
        <p>Last updated: November 11, 2024</p>
        <p>
          This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your
          information when You use the Service and tells You about Your privacy rights and how the law protects You.
        </p>
        <p>
          We use Your Personal data to provide and improve the Service. By using the Service, You agree to the
          collection and use of information in accordance with this Privacy Policy.
        </p>
        <h1>Interpretation and Definitions</h1>
        <h2>Interpretation</h2>
        <p>
          The words of which the initial letter is capitalized have meanings defined under the following conditions. The
          following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
        </p>
        <h2>Definitions</h2>
        <p>For the purposes of this Privacy Policy:</p>
        <ul>
          <li>
            <p>
              <strong>Account</strong> means a unique account created for You to access our Service or parts of our
              Service.
            </p>
          </li>
          <li>
            <p>
              <strong>Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or
              &quot;Our&quot; in this Agreement) refers to Ledger Explorer Ltd., Suite 9, Ansuya Estate, Revolution
              Avenue, Victoria, Mahe, Seychelles.
            </p>
          </li>
          <li>
            <p>
              <strong>Cookies</strong> means Cookies and other similar technologies such as local shared objects, flash
              cookies, are files that are placed on Your computer, mobile device or any other device by a website,
              containing the details of Your browsing history on that website among its many uses.
            </p>
          </li>
          <li>
            <p>
              <strong>Country</strong> refers to: Malta
            </p>
          </li>
          <li>
            <p>
              <strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a
              digital tablet.
            </p>
          </li>
          <li>
            <p>
              <strong>Personal Data</strong> is any information that relates to an identified or identifiable
              individual.
            </p>
          </li>
          <li>
            <p>
              <strong>Service</strong> refers to the Website.
            </p>
          </li>
          <li>
            <p>
              <strong>Service Provider</strong> means any natural or legal person who processes the data on behalf of
              the Company. It refers to third-party companies or individuals employed by the Company to facilitate the
              Service, to provide the Service on behalf of the Company, to perform services related to the Service or to
              assist the Company in analyzing how the Service is used.
            </p>
          </li>
          <li>
            <p>
              <strong>Usage Data</strong> refers to data collected automatically, either generated by the use of the
              Service or from the Service infrastructure itself (for example, the duration of a page visit).
            </p>
          </li>
          <li>
            <p>
              <strong>Website</strong> refers to Bithomp, accessible from <a href={server}>{server}</a>
            </p>
          </li>
          <li>
            <p>
              <strong>You</strong> means the individual accessing or using the Service, or the company, or other legal
              entity on behalf of which such individual is accessing or using the Service, as applicable.
            </p>
          </li>
        </ul>
        <h1>Collecting and Using Your Personal Data</h1>
        <h2>Types of Data Collected</h2>
        <h3>Personal Data</h3>
        <p>
          While using Our Service, We may ask You to provide Us with certain personally identifiable information that
          can be used to contact or identify You. Personally identifiable information may include, but is not limited
          to:
        </p>
        <ul>
          <li>
            <p>Email address</p>
          </li>
          <li>
            <p>First name and last name</p>
          </li>
          <li>
            <p>Phone number</p>
          </li>
          <li>
            <p>Address, State, Province, ZIP/Postal code, City</p>
          </li>
          <li>
            <p>Usage Data</p>
          </li>
        </ul>
        <h3>Usage Data</h3>
        <p>Usage Data is collected automatically when using the Service.</p>
        <p>
          Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser
          type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time
          spent on those pages, unique device identifiers and other diagnostic data.
        </p>
        <p>
          When You access the Service by or through a mobile device, We may collect certain information automatically,
          including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address
          of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique
          device identifiers and other diagnostic data.
        </p>
        <p>
          We may also collect information that Your browser sends whenever You visit our Service or when You access the
          Service by or through a mobile device.
        </p>
        <h3>Tracking Technologies and Cookies</h3>
        <p>
          We use Cookies and similar tracking technologies to track the activity on Our Service and store certain
          information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to
          improve and analyze Our Service. The technologies We use may include:
        </p>
        <ul>
          <li>
            <strong>The local storage</strong> The local storage of a browser called "sessionStorage" and "localStorage"
            is used to store information. "SessionStorage" is automatically deleted when the browser program is closed,
            to delete the "localStorage" You must delete the browsing history.
          </li>
          <li>
            <strong>Cookies or Browser Cookies.</strong> A cookie is a small file placed on Your Device. You can
            instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do
            not accept Cookies, You may not be able to use some parts of our Service. Unless you have adjusted Your
            browser setting so that it will refuse Cookies, our Service may use Cookies.
          </li>
          <li>
            <strong>Flash Cookies.</strong> Certain features of our Service may use local stored objects (or Flash
            Cookies) to collect and store information about Your preferences or Your activity on our Service. Flash
            Cookies are not managed by the same browser settings as those used for Browser Cookies. For more information
            on how You can delete Flash Cookies, please read{' '}
            <a
              href="https://helpx.adobe.com/flash-player/kb/disable-local-shared-objects-flash.html#main_Where_can_I_change_the_settings_for_disabling__or_deleting_local_shared_objects_"
              rel="noreferrer"
              target="_blank"
            >
              Where can I change the settings for disabling, or deleting local shared objects?
            </a>
          </li>
          <li>
            <strong>Web Beacons.</strong> Certain sections of our Service and our emails may contain small electronic
            files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit
            the Company, for example, to count users who have visited those pages or opened an email and for other
            related website statistics (for example, recording the popularity of a certain section and verifying system
            and server integrity).
          </li>
        </ul>
        <p>
          Cookies can be &quot;Persistent&quot; or &quot;Session&quot; Cookies. Persistent Cookies remain on Your
          personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close
          Your web browser.
        </p>
        <p>We use both Session and Persistent Cookies for the purposes set out below:</p>
        <ul>
          <li>
            <p>
              <strong>Necessary / Essential Cookies</strong>
            </p>
            <p>Type: Session Cookies</p>
            <p>Administered by: Us</p>
            <p>
              Purpose: These Cookies are essential to provide You with services available through the Website and to
              enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user
              accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use
              these Cookies to provide You with those services.
            </p>
          </li>
          <li>
            <p>
              <strong>Cookies Policy / Notice Acceptance Cookies</strong>
            </p>
            <p>Type: Persistent Cookies</p>
            <p>Administered by: Us</p>
            <p>Purpose: These Cookies identify if users have accepted the use of cookies on the Website.</p>
          </li>
          <li>
            <p>
              <strong>Functionality Cookies</strong>
            </p>
            <p>Type: Persistent Cookies</p>
            <p>Administered by: Us</p>
            <p>
              Purpose: These Cookies allow us to remember choices You make when You use the Website, such as remembering
              your login details or language preference. The purpose of these Cookies is to provide You with a more
              personal experience and to avoid You having to re-enter your preferences every time You use the Website.
            </p>
          </li>
        </ul>

        <h3>Processing of Personal Data</h3>
        <p>Personal Data is also collected for the following purposes and using the following services:</p>
        <h4>Tag Management</h4>
        <p>
          This type of service helps the Owner to manage the tags or scripts needed on this Application in a centralized
          fashion.
          <br />
          This results in the Users' Data flowing through these services, potentially resulting in the retention of this
          Data.
        </p>
        <h4>Google Tag Manager</h4>
        <p>
          Google Tag Manager is a tag management service provided by Google LLC or by Google Ireland Limited, depending
          on how the Owner manages the Data processing. Personal Data processed: Trackers; Usage Data. Place of
          processing: United States – <a href="https://policies.google.com/privacy">Privacy Policy</a>; Ireland –{' '}
          <a href="https://policies.google.com/privacy">Privacy Policy</a>.
        </p>
        <h3>Cookies and Local storage in use</h3>
        <h4>Third party Cookies</h4>
        <ul>
          <li>
            <strong>cf_clearance</strong> - The challenge cookie by Cloudflare. If you solve a challenge correctly,
            Cloudflare will set that cookie for the domain that presented the challenge. Clearance cookies are like
            authentication cookies, but instead of being tied to an identity, they are tied to the fact that you solved
            a challenge sometime in the past.
          </li>
        </ul>
        <h4>Cookies</h4>
        <ul>
          <li>
            <strong>showCookie</strong> - show or hide the cookie message. (ex. true).
          </li>
          <li>
            <strong>NEXT_LOCALE</strong> - the prefered Service language (ex: "en").
          </li>
          <li>
            <strong>theme</strong> - the prefered theme of the Service (ex: "light").
          </li>
          <li>
            <strong>pro-expire</strong> - expiration date (unix) of the subscription for logged-in users, used to
            prevent sending unnecessary requests. (ex: "1718495999000")
          </li>
          <li>
            <strong>currency</strong> - the prefered Service currency (ex: "sek").
          </li>
          <li>
            <strong>_ga</strong> - the main cookie used by Google Analytics, enables a service to distinguish one
            visitor from another and lasts for 2 years.
          </li>
          <li>
            <strong>_ga_*</strong> - A unique _ga cookie for the property.
          </li>
        </ul>
        <h4>Local storage</h4>
        <ul>
          <li>
            <strong>sessionToken</strong> - session token for logged-in users, to show relevant data for the authroised
            user (ex: "ebc39d9a-13eb-4a86-bf7a-2002726ec6a7-54633f3b-b8ea-483e-89e3-5f2763b269c1").
          </li>
          <li>
            <strong>country</strong> - country of residence (ex: "SE").
          </li>
          <li>
            <strong>account</strong> - Logged in user data: address, username. (ex.{' '}
            {"{'address': 'rhphEJQoxuquJmuJgtLbGyBW2NK6s6nQSW', 'username': 'Bithomp'}"})
          </li>
          <li>
            <strong>xamanUserToken</strong> - Xaman user token (ex. "c3f386ab-b5b5-47c3-87a4-d031451777fa").
          </li>
          <li>
            <strong>language</strong> - on docs.bithomp.com, the prefered programing language (ex: "php").
          </li>
          <li>
            <strong>isOver18</strong> - show or hide explicit content depending on the age
          </li>
        </ul>
        <h3>How to manage Cookies</h3>
        <p>
          If You prefer to avoid the use of Cookies on the Website, first You must disable the use of Cookies in your
          browser and then delete the Cookies saved in your browser associated with this website. You may use this
          option for preventing the use of Cookies at any time.
        </p>
        <p>
          If You do not accept Our Cookies, You may experience some inconvenience in your use of the Website and some
          features may not function properly.
        </p>
        <p>
          If You'd like to delete Cookies or instruct your web browser to delete or refuse Cookies, please visit the
          help pages of your web browser.
        </p>
        <ul>
          <li>
            <a href="https://support.google.com/accounts/answer/61416?co=GENIE.Platform%3DDesktop&amp;hl=en">
              Google Chrome
            </a>
          </li>
          <li>
            <a href="https://privacy.microsoft.com/en-us/windows-10-microsoft-edge-and-privacy">Microsoft Edge</a>
          </li>
          <li>
            <a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences">
              Mozilla Firefox
            </a>
          </li>
          <li>
            <a href="https://support.microsoft.com/en-gb/help/17442/windows-internet-explorer-delete-manage-cookies">
              Microsoft Internet Explorer
            </a>
          </li>
          <li>
            <a href="https://www.opera.com/help/tutorials/security/privacy/">Opera</a>
          </li>
          <li>
            <a href="https://support.apple.com/en-ie/guide/safari/sfri11471/mac">Apple Safari</a>
          </li>
        </ul>
        <p>For any other web browser, please visit your web browser's official web pages.</p>
        <h1>Use of Cloudflare Services</h1>
        <p>
          <strong>Third-Party Services:</strong>
        </p>
        <p>
          Our website utilizes the services of Cloudflare, a third-party service provider. By accessing our website, you
          acknowledge that certain data may be collected and processed by Cloudflare as described in their Privacy
          Policy.
        </p>
        <p>
          <strong>Information Collected by Cloudflare:</strong>
        </p>
        <p>
          Cloudflare may collect and process certain information, including but not limited to IP addresses, access
          times, and device information. Please refer to Cloudflare's Privacy Policy for more details on the types of
          information collected and how it is used.
        </p>
        <p>
          <strong>Cookies and Tracking:</strong>
        </p>
        <p>
          Cloudflare may use cookies and other tracking technologies. Please refer to Cloudflare's Privacy Policy for
          information on how these technologies are used and how you can manage your preferences.
        </p>
        <p>
          <strong>Data Security:</strong>
        </p>
        <p>
          We take reasonable steps to ensure the security of your data. However, please be aware that Cloudflare has its
          own security measures in place, and you should review their Privacy Policy for details on how your data is
          protected.
        </p>
        <p>
          <strong>Changes to Privacy Policy:</strong>
        </p>
        <p>
          We reserve the right to update our Privacy Policy to reflect changes in our practices or the services provided
          by Cloudflare. Any updates will be posted on our website.
        </p>
        <h1>Use of Direct Registration System</h1>
        <p>
          <strong>Information Collected during Registration:</strong>
        </p>
        <p>During the registration process, we collect certain personal information such as email addresses.</p>
        <p>
          <strong>Use of Direct Registration System (DRS):</strong>
        </p>
        <p>
          Our Direct Registration System (DRS) may utilize third-party services or authentication methods to verify and
          validate user information. This may involve the secure transmission of relevant data to these third parties
          for authentication purposes.
        </p>
        <p>
          <strong>Purpose of Personal Information:</strong>
        </p>
        <p>
          The personal information collected during registration is used for account management, providing personalized
          services, and communicating with users about their accounts and our services.
        </p>
        <p>
          <strong>Third-Party Authentication:</strong>
        </p>
        <p>
          Users should be aware that our Direct Registration System may involve third-party authentication services.
          Users are encouraged to review the terms and privacy policies of these third-party services before proceeding
          with registration.
        </p>
        <p>
          <strong>Account Deactivation and Deletion:</strong>
        </p>
        <p>
          Users have the right to request the deactivation or deletion of their accounts. Details on how to deactivate
          or delete accounts can be found in the "Account Management" section.
        </p>
        <h1>Use of Google Analytics 4</h1>
        <p>
          <strong>Information Collected by Google Analytics:</strong>
        </p>
        <p>
          We use Google Analytics 4 to collect and analyze data about how users interact with our website. This includes
          information such as IP addresses, browser types, and pages visited.
        </p>
        <p>
          <strong>Purpose of Data Collection:</strong>
        </p>
        <p>
          The data collected by Google Analytics is used to understand user behavior, improve our website, and tailor
          our content to better meet the needs of our users.
        </p>
        <p>
          <strong>Google Analytics Features:</strong>
        </p>
        <p>
          Google Analytics may employ features such as user ID tracking, demographics, and interests reporting. This
          data helps us create a more personalized and relevant user experience.
        </p>
        <p>
          <strong>Use of Cookies:</strong>
        </p>
        <p>
          Google Analytics uses cookies to collect information about user interactions with our website. You can manage
          your cookie preferences through your browser settings.
        </p>
        <p>
          <strong>Opting Out of Google Analytics:</strong>
        </p>
        <p>
          If you prefer not to have your data collected by Google Analytics, you can opt-out by adjusting your browser
          settings or using the Google Analytics Opt-Out Browser Add-on.
        </p>
        <p>
          <strong>Third-Party Disclosure:</strong>
        </p>
        <p>
          We may share Google Analytics data with third parties for the purpose of data analysis and website
          improvement. However, this data is aggregated and does not personally identify individual users.
        </p>
        <h1>Use of PayPal</h1>
        <p>
          <strong>Payment Information:</strong>
        </p>
        <p>
          When you make a purchase, we collect and transmit your payment information, including but not limited to
          credit card details, to PayPal for the purpose of processing the transaction.
        </p>
        <p>
          <strong>Security Measures:</strong>
        </p>
        <p>
          We take reasonable steps to ensure the security of your payment information during transmission. However, the
          processing of payments is handled by PayPal, and you should review their security measures outlined in their
          User Agreement.
        </p>
        <p>
          <strong>PayPal Data Handling:</strong>
        </p>
        <p>
          PayPal transactions are subject to PayPal's Privacy Statement, available at{' '}
          <a href="https://www.paypal.com/us/legalhub/privacy-full/">PayPal Privacy Statement</a>. Please review this
          statement to understand how PayPal handles and protects your personal information.
        </p>
        <p>
          <strong>Data Sharing with PayPal:</strong>
        </p>
        <p>
          We may share necessary transaction information with PayPal to facilitate payment processing and ensure a
          smooth transaction experience.
        </p>
        <p>
          <strong>User Rights:</strong>
        </p>
        <p>
          Users have the right to review, correct, or request the deletion of their payment information. For more
          details, please refer to the "Account Management" section in our Privacy Policy.
        </p>
        <h2>Use of Your Personal Data</h2>
        <p>The Company may use Personal Data for the following purposes:</p>
        <ul>
          <li>
            <p>
              <strong>To provide and maintain our Service</strong>, including to monitor the usage of our Service.
            </p>
          </li>
          <li>
            <p>
              <strong>To manage Your Account:</strong> to manage Your registration as a user of the Service. The
              Personal Data You provide can give You access to different functionalities of the Service that are
              available to You as a registered user.
            </p>
          </li>
          <li>
            <p>
              <strong>For the performance of a contract:</strong> the development, compliance and undertaking of the
              purchase contract for the products, items or services You have purchased or of any other contract with Us
              through the Service.
            </p>
          </li>
          <li>
            <p>
              <strong>To contact You:</strong> To contact You by email, telephone calls, SMS, or other equivalent forms
              of electronic communication, such as a mobile application's push notifications regarding updates or
              informative communications related to the functionalities, products or contracted services, including the
              security updates, when necessary or reasonable for their implementation.
            </p>
          </li>
          <li>
            <p>
              <strong>To provide You</strong> with news, special offers and general information about other goods,
              services and events which we offer that are similar to those that you have already purchased or enquired
              about unless You have opted not to receive such information.
            </p>
          </li>
          <li>
            <p>
              <strong>To manage Your requests:</strong> To attend and manage Your requests to Us.
            </p>
          </li>
          <li>
            <p>
              <strong>For business transfers:</strong> We may use Your information to evaluate or conduct a merger,
              divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our
              assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which
              Personal Data held by Us about our Service users is among the assets transferred.
            </p>
          </li>
          <li>
            <p>
              <strong>For other purposes</strong>: We may use Your information for other purposes, such as data
              analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to
              evaluate and improve our Service, products, services, marketing and your experience.
            </p>
          </li>
        </ul>
        <p>We may share Your personal information in the following situations:</p>
        <ul>
          <li>
            <strong>With Service Providers:</strong> We may share Your personal information with Service Providers to
            monitor and analyze the use of our Service, to contact You.
          </li>
          <li>
            <strong>For business transfers:</strong> We may share or transfer Your personal information in connection
            with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a
            portion of Our business to another company.
          </li>
          <li>
            <strong>With Affiliates:</strong> We may share Your information with Our affiliates, in which case we will
            require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other
            subsidiaries, joint venture partners or other companies that We control or that are under common control
            with Us.
          </li>
          <li>
            <strong>With business partners:</strong> We may share Your information with Our business partners to offer
            You certain products, services or promotions.
          </li>
          <li>
            <strong>With other users:</strong> when You share personal information or otherwise interact in the public
            areas with other users, such information may be viewed by all users and may be publicly distributed outside.
          </li>
          <li>
            <strong>With Your consent:</strong> We may disclose Your personal information for any other purpose with
            Your consent.
          </li>
        </ul>
        <h2>Retention of Your Personal Data</h2>
        <p>
          The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this
          Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal
          obligations (for example, if we are required to retain your data to comply with applicable laws), resolve
          disputes, and enforce our legal agreements and policies.
        </p>
        <p>
          The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a
          shorter period of time, except when this data is used to strengthen the security or to improve the
          functionality of Our Service, or We are legally obligated to retain this data for longer time periods.
        </p>
        <h2>Transfer of Your Personal Data</h2>
        <p>
          Your information, including Personal Data, is processed at the Company's operating offices and in any other
          places where the parties involved in the processing are located. It means that this information may be
          transferred to — and maintained on — computers located outside of Your state, province, country or other
          governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.
        </p>
        <p>
          Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement
          to that transfer.
        </p>
        <p>
          The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in
          accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization
          or a country unless there are adequate controls in place including the security of Your data and other
          personal information.
        </p>
        <h2>Disclosure of Your Personal Data</h2>
        <h3>Business Transactions</h3>
        <p>
          If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We
          will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy
          Policy.
        </p>
        <h3>Law enforcement</h3>
        <p>
          Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so
          by law or in response to valid requests by public authorities (e.g. a court or a government agency).
        </p>
        <h3>Other legal requirements</h3>
        <p>The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:</p>
        <ul>
          <li>Comply with a legal obligation</li>
          <li>Protect and defend the rights or property of the Company</li>
          <li>Prevent or investigate possible wrongdoing in connection with the Service</li>
          <li>Protect the personal safety of Users of the Service or the public</li>
          <li>Protect against legal liability</li>
        </ul>
        <h2>Security of Your Personal Data</h2>
        <p>
          The security of Your Personal Data is important to Us, but remember that no method of transmission over the
          Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means
          to protect Your Personal Data, We cannot guarantee its absolute security.
        </p>
        <h1>Children's Privacy</h1>
        <p>
          Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable
          information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child
          has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data
          from anyone under the age of 13 without verification of parental consent, We take steps to remove that
          information from Our servers.
        </p>
        <p>
          If We need to rely on consent as a legal basis for processing Your information and Your country requires
          consent from a parent, We may require Your parent's consent before We collect and use that information.
        </p>
        <h1>Links to Other Websites</h1>
        <p>
          Our Service may contain links to other websites that are not operated by Us. If You click on a third party
          link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of
          every site You visit.
        </p>
        <p>
          We have no control over and assume no responsibility for the content, privacy policies or practices of any
          third party sites or services.
        </p>
        <h1>Your data protection rights</h1>
        <p>
          Our Company would like to make sure you are fully aware of all of your data protection rights. Every user is
          entitled to the following:
        </p>
        <ul>
          <li>
            <strong>The right to access:</strong> You have the right to request Us for copies of your personal data. We
            may charge you a small fee for this service.
          </li>
          <li>
            <strong>The right to rectification:</strong> You have the right to request that We correct any information
            you believe is inaccurate. You also have the right to request Us to complete information you believe is
            incomplete.
          </li>
          <li>
            <strong>The right to erasure:</strong> You have the right to request that We erase your personal data, under
            certain conditions.
          </li>
          <li>
            <strong>The right to restrict processing:</strong> You have the right to request that We restrict the
            processing of your personal data, under certain conditions.
          </li>
          <li>
            <strong>The right to object to processing:</strong> You have the right to object to Our processing of your
            personal data, under certain conditions.
          </li>
          <li>
            <strong>The right to data portability:</strong> You have the right to request that We transfer the data that
            we have collected to another organization, or directly to you, under certain conditions.
          </li>
        </ul>
        <p>
          If You make a request, We have one month to respond to you. If you would like to exercise any of these rights,
          please contact Us at our email:{' '}
          <Mailto email="dataprotection@bithomp.com" headers={{ subject: 'Data Protection' }} />.
        </p>
        <h1>Changes to this Privacy Policy</h1>
        <p>
          We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new
          Privacy Policy on this page.
        </p>
        <p>
          We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming
          effective and update the &quot;Last updated&quot; date at the top of this Privacy Policy.
        </p>
        <p>
          You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are
          effective when they are posted on this page.
        </p>
        <h1>Contact Us</h1>
        <p>
          If you have any questions about this Privacy Policy, You can contact us by email:{' '}
          <Mailto email="dataprotection@bithomp.com" headers={{ subject: 'Privacy Policy' }} />.
        </p>
        <h1>Supervisory organs and other authorities</h1>
        <p>Our supervisory authority who You can turn to regarding our data processing is:</p>
        <p>
          <strong>Name:</strong> Information Commission of Seychelles
        </p>
        <p>
          <strong>Post address:</strong> P.O. Box 1342, KLA Residence, 3rd Floor, Room 9, Mont Fleuri
        </p>
        <p>
          <strong>Phone:</strong> (248) 430-3188
        </p>
        <p>
          <strong>Email:</strong> <Mailto email="enquiries@infocom.sc" headers={{ subject: 'Privacy Protection' }} />
        </p>
      </div>
    </>
  )
}
