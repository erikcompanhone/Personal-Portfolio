import React from 'react';
import TimelineCard from '../components/TimelineCard';
import BadgeCard from '../components/BadgeCard';

const Education: React.FC = () => {
  const education = [
    {
      title: "Bachelor of Science in Computer Science (GPA: 3.58 / 4.0)",
      organization: 'University of Florida – Gainesville, FL',
      period: 'Graduated 05/2024',
  logo: '/assets/education/uf.png',
      description: [
        'First-generation graduate with strong academic performance.',
        'Clubs: PC Building Society (2023/2024).'
      ]
    },
    {
      title: 'Associate in Arts in Computer Science (GPA: 3.8 / 4.0)',
      organization: 'Miami Dade College – The Honors College, Wolfson Campus – Miami, FL',
      period: 'Graduated 05/2022',
  logo: '/assets/education/mdchonors.png',
      description: [
        'Robotics Club (2020–2021).',
        'Wolves in Training (WIT): mentee (2020–2021) and mentor (2021–2022).'
      ]
    }
  ];

  const certifications = [
    {
      title: 'Engineer Data for Predictive Modeling with BigQuery ML',
      organization: 'Google Cloud Skill Badge',
      period: 'Earned July 2026',
      description: [
        'Build data transformation pipelines to BigQuery using Dataprep by Trifacta.',
        'Build extract, transform, and load (ETL) workflows with Cloud Storage, Dataflow, and BigQuery.',
        'Build machine learning models using BigQuery ML.',
        'Copy data across multiple locations using Cloud Composer.'
      ],
      context: 'Intermediate skill badge covering data engineering on Google Cloud, earned by completing a hands-on challenge lab that validates building ETL pipelines into BigQuery and training predictive machine learning models with BigQuery ML.',
      image: '/assets/education/certs_and_badges/engineer_data_for_predictive_modeling_with_bigquery_ml.png',
      verifyUrl: 'https://www.credly.com/badges/5745f893-5078-4bfb-bc2d-af95a5a7c866'
    },
    {
      title: 'Perform Predictive Data Analysis in BigQuery',
      organization: 'Google Cloud Skill Badge',
      period: 'Earned July 2026',
      description: [
        'Create a soccer dataset in BigQuery by importing CSV and JSON files.',
        'Apply sophisticated SQL analytical concepts to large datasets in BigQuery.',
        'Train an expected goals model on soccer event data using BigQuery ML.',
        'Evaluate the impressiveness of World Cup goals using model predictions.'
      ],
      context: 'Intermediate skill badge covering the fundamentals of sports data science in BigQuery, earned through hands-on labs that validate importing and analyzing soccer match data with advanced SQL and training predictive models with BigQuery ML.',
      image: '/assets/education/certs_and_badges/perform_predictive_data_analysis_in_bigquery.png',
      verifyUrl: 'https://www.credly.com/badges/95043629-af7e-4e0b-b83b-7c374428c41e'
    },
    {
      title: 'Deploy Multi-Agent Architectures',
      organization: 'Google Cloud Skill Badge',
      period: 'Earned May 2026',
      description: [
        'Build multi-agent systems with the Agent Development Kit (ADK).',
        'Connect agents using the Agent-to-Agent (A2A) protocol.',
        'Integrate external tools via the Model Context Protocol (MCP).',
        'Deploy a complete multi-agent solution to Agent Engine.'
      ],
      context: 'Final badge of the Agentic AI on Google Cloud learning path, which guides learners through building and deploying intelligent multi-agent systems using Google Cloud technologies, covering Gemini Enterprise, ADK, enterprise database integration, and secure agent architectures.',
      image: '/assets/education/certs_and_badges/deploy_multi_agent_architectures.png',
      verifyUrl: 'https://www.credly.com/badges/99a5f974-5f27-4092-90d5-bb761d03c745'
    }
  ];

  // Expired certifications intentionally omitted. If reintroduced, mark as (Expired) under a separate "Past Certifications" heading.

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Education</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 border-b border-secondary pb-2">Academic Background</h2>
        <div className="space-y-6">
          {education.map((item, index) => (
            <TimelineCard
              key={index}
              title={item.title}
              organization={item.organization}
              period={item.period}
              description={item.description}
              logo={item.logo}
            />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6 border-b border-secondary pb-2">Certifications & Badges</h2>
        <div className="space-y-6">
          {certifications.map((item, index) => (
            <BadgeCard
              key={index}
              title={item.title}
              organization={item.organization}
              period={item.period}
              description={item.description}
              context={item.context}
              image={item.image}
              verifyUrl={item.verifyUrl}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Education;
