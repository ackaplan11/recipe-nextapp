import Head from 'next/head'

export default function aboutPage() {
  return (
      <div>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <h1> This is the about page</h1>
          <h3> While the project is under construction, I will use this as a project page</h3>
          <h3> 
              Here are some things I will need to know how to do using React/Next to <br>
              </br> complete this project
          </h3>
          <list>
              <ul><li>React Components</li></ul>
              <ul><li>Database Access in Javascript</li></ul>
                <list>
                  <ul><li>getStaticProps() -- prerender the html on this page, fetch data needed (params) return prop</li></ul>
                </list>

              <ul><li>User Authentificaiton</li></ul>
              <ul><li>Content Delivery Networks</li></ul>
              <ul><li>HTML/CSS/REACT styling for UI</li></ul>

          </list>
        </main>    
      </div>
  )
}