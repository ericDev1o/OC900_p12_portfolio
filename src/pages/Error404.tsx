import Layout from '../components/containers/Layout';

export default function Error404() {
    return <main>
        <h1 
        className="
          p-28 
          text-5xl 
          text-red-500 
          leading-loose"
        >
          404 error
        </h1>
        <h2
          className="
            p-24
            text-4xl
            text-red-500 
            leading-loose"
        >
          Page not found
        </h2>
    </main>
}