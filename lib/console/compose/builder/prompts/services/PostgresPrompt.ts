// imports.
import { ServicePrompt } from 'lib/console/compose/builder/prompts';
import * as types from 'lib/console/compose/builder/prompts/types';

// Class PostgresPrompt.
export class PostgresPrompt extends ServicePrompt {
  // service / question name.
  public name: string = 'PostgreSQL';
  // service slug (lowercase, normalized name).
  public slug: string = 'postgres';
  // docker image name.
  public image: string = 'postgres';
  // enabled by default status.
  public enabledByDefault: boolean = false;

  // tags.
  public tags: string[] = ['13.1','12.5','11.10', '10.15', '9.6', '9.5'];

  // port mappings.
  public ports: types.IPromptPort[] = [
    { name: 'default', port: '5432' },
  ];

  // variables.
  public variables: types.IPromptVariable[] = [
    { name: 'POSTGRES_USER', description: 'Username', initial: 'project' },
    { name: 'POSTGRES_PASSWORD', description: 'Password', initial: 'project' },
    { name: 'POSTGRES_DB', description: 'Database Name', initial: 'project' },
  ];

  // list of mount points.
  public mountPoints: types.IPromptMount[] = [
    { source: 'postgres-data', target: '/var/lib/postgresql/data' },
  ];

  // list of mount points.
  public volumes: types.IPromptVolume[] = [
    { name: 'postgres-data', driver: 'local' },
  ];
}
