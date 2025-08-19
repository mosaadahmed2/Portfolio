// src/App.tsx
export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="bg-blue-600 text-white p-6 text-center">
        <h1 className="text-4xl font-bold">Mosaad Ahmed Mohammed</h1>
        <p className="mt-2 text-lg">Data Engineer | Python | SQL | AWS | BigQuery | Informatica</p>
      </header>

      <main className="p-6 max-w-4xl mx-auto">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p>
            I am a technology-driven software engineer with over 2 years of experience in building and optimizing
            ETL data pipelines, developing solutions with Python, SQL, and modern cloud platforms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <ul className="list-disc ml-6">
            <li>Python, SQL</li>
            <li>Data Engineering (ETL, Airflow, Informatica)</li>
            <li>Cloud Platforms: AWS, GCP (BigQuery, Snowflake)</li>
            <li>Visualization: Superset, D3.js</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <ul className="list-disc ml-6">
            <li>ETL pipeline from Salesforce & NetSuite to Snowflake using Airflow</li>
            <li>Interactive visualization of US health data with D3.js</li>
          </ul>
        </section>
      </main>

      <footer className="bg-gray-800 text-white text-center p-4">
        &copy; {new Date().getFullYear()} Mosaad Ahmed Mohammed
      </footer>
    </div>
  );
}


