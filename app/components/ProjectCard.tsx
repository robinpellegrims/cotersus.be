import Image from 'next/image';
import type { Project } from '../data/projects';
import { clients as clientsData, type Client } from '../data/clients';
import {
  technologies as technologiesData,
  type Technology,
} from '../data/technologies';

type ProjectCardProps = Project;

export function ProjectCard({
  image,
  alt,
  role,
  title,
  url,
  description,
  technologies: technologyKeys,
  clients: clientKeys,
  year,
}: ProjectCardProps) {
  return (
    <div className="group bg-white dark:bg-zinc-700 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-zinc-600 overflow-hidden w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)] lg:max-w-sm">
      <div className="h-48 relative overflow-hidden">
        <Image src={image} alt={alt} fill className="object-cover" />
      </div>
      <div className="p-6">
        <div className="mb-2">
          <p className="text-xs text-gray-500 dark:text-zinc-400 mb-2">
            {clientKeys.map((clientKey, index) => {
              const client = clientsData[clientKey] as Client;
              return (
                <span key={clientKey}>
                  {client.url ? (
                    <a
                      href={client.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-brand-orange transition-colors"
                    >
                      {client.name}
                    </a>
                  ) : (
                    client.name
                  )}
                  {index < clientKeys.length - 1 && ', '}
                </span>
              );
            })}{' '}
            • {year}
          </p>
        </div>
        <div className="mb-2">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-bold text-brand-orange hover:text-brand-red transition-colors inline-flex items-center gap-1"
          >
            {title}
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
        <div className="mb-4">
          <p className="text-xs text-gray-500 dark:text-zinc-400 uppercase tracking-wide">
            {role}
          </p>
        </div>
        <p className="text-gray-600 dark:text-zinc-300 text-sm mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {technologyKeys.map((techKey) => {
            const tech = technologiesData[techKey] as Technology;
            const content = (
              <span className="flex items-center gap-1.5">
                {tech.icon && (
                  <span className="inline-block w-4 h-4 flex-shrink-0 [&>svg]:!w-4 [&>svg]:!h-4">
                    {tech.icon}
                  </span>
                )}
                <span>{tech.name}</span>
              </span>
            );
            return tech.url ? (
              <a
                key={techKey}
                href={tech.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 bg-gray-100 dark:bg-zinc-800 text-xs rounded-full hover:bg-brand-orange hover:text-white transition-colors"
              >
                {content}
              </a>
            ) : (
              <span
                key={techKey}
                className="px-3 py-1 bg-gray-100 dark:bg-zinc-800 text-xs rounded-full"
              >
                {content}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
