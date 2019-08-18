import * as core from '@actions/core';
import * as github from '@actions/github';

const greeting = 'Thanks for opening this issue!';

async function run() {
  try {
    const client: github.GitHub = new github.GitHub(
      core.getInput('repo-token', { required: true })
    );

    const context = github.context;

    if (!context.payload.issue) {
      core.debug('Not an issue, skipping');
    }

    if (context.payload.action !== 'opened') {
      core.debug('No issue was opened, skipping');
      return;
    }

    await client.issues.createComment({
      ...context.issue,
      body: greeting,
    });
  } catch (error) {
    core.setFailed(error.message);
    return;
  }
}

run();
