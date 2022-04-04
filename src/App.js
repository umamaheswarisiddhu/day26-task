import './App.css';
import Menu from './Card';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  let values = [
    {
      head: 'Free',
      price: 0,
      month: 'month',
      description: [
        {
          content: 'Single Users'
        },
        {
          content: '5GB Storage'

        },
        {
          content: 'Unlimited Public Projects'
        },
        {
          content: 'Community Access'
        },
        {
          content: 'Unlimited Private Projects',
          mute: true
        },
        {
          content: 'Dedicated Phone Support',
          mute: true
        },
        {
          content: 'Free Subdomain',
          mute: true
        },
        {
          content: 'Monthly Status Reports',
          mute: true
        }]
    },
    {
      head: 'Plus',
      month: 'month',
      price: 9,
      description: [
        {
          content: '5 Users',
          bold: true
        },
        {
          content: '50GB Storage'

        },
        {
          content: 'Unlimited Public Projects'
        },
        {
          content: 'Community Access'
        },
        {
          content: 'Unlimited Private Projects'
        },
        {
          content: 'Dedicated Phone Support'
        },
        {
          content: 'Free Subdomain'
        },
        {
          content: 'Monthly Status Reports',
          mute: true
        }]

    },
    {
      head: 'Pro',
      month: 'month',
      price: 49,
      description: [
        {
          content: 'Unlimited Users',
          bold: true
        },
        {
          content: '150GB Storage'

        },
        {
          content: 'Unlimited Public Projects'
        },
        {
          content: 'Community Access'
        },
        {
          content: 'Unlimited Private Projects'
        },
        {
          content: 'Dedicated Phone Support'
        },
        {
          unlimited: 'unlimited',
          bolder: true,
          content: 'Free Subdomain'

        },
        {
          content: 'Monthly Status Reports'
        }]

    }
  ]
  return (
    <section className="pricing py-5">
    <div className="container">
      <div className="row">
        {
          values.map((content) => {
            return <Menu card={content} />
          })
        }
      </div>
    </div>
  </section>
  );
}
    
export default App;
