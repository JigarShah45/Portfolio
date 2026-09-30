import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Badge from "@/components/ui/Badge";
import type { Metadata } from "next";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="section-container max-w-4xl">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-orange-500 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Work
        </Link>

        <div className="aspect-[16/9] bg-neutral-100 dark:bg-neutral-800 rounded-2xl overflow-hidden mb-8 relative">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 896px) 100vw, 896px"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent" />
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          <Badge>{project.category}</Badge>
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="outline">
              {tech}
            </Badge>
          ))}
        </div>

        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white">
          {project.title}
        </h1>

        <p className="mt-6 text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
          {project.longDescription}
        </p>

        {project.highlights && project.highlights.length > 0 && (
          <div className="mt-10">
            <h2 className="font-display text-xl font-semibold text-neutral-900 dark:text-white mb-4">
              Key Features
            </h2>
            <ul className="space-y-3">
              {project.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-3 text-neutral-600 dark:text-neutral-400"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-10">
          <h2 className="font-display text-xl font-semibold text-neutral-900 dark:text-white mb-4">
            Technologies Used
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <div
                key={tech}
                className="px-4 py-2 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-sm font-medium text-neutral-700 dark:text-neutral-300"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-4 mt-10">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors font-medium"
            >
              <Github className="w-5 h-5" />
              View Source
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-orange-500 text-white hover:bg-orange-600 transition-colors font-medium"
            >
              <ExternalLink className="w-5 h-5" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
