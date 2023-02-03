# Coding standards

## Version control

For version control we use git repositories. We strive to have very good commit hygiene across all shared branches.

## Git commit grouping

Here are a few rules that almost always apply (when opening a PR):

-   A commit should never introduce changes that break tests or any CI

    -   Each commit is supposed to be a standalone. It should not rely on another later commit within the PR to fix a bug it introduces.

-   A commit (and a PR too for that matter) should be as small as possible.

    -   In the case of introducing a new feature, we should try to add the new tests and the documentation in the same commit.

-   A single commit should never mix unrelated changes.

    -   For example, refactorings should never be mixed with fixes.

## Git commit messages

We should try to have commit messages that have both a title
and a body whenever possible. It should be as clear as possible **the 'why'** of the commit (the context and motivation for the change) not just the **"how"**.

As an example, you may want to refactor a function in preparation for introducing XYZ feature. In this case, the commit message should explain the motivation for the refactor, and the fact that it is a preparation for the XYZ feature.

We shall use the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) standard for our commit messages.

## Pull Request / code reviews

-   PRs **must** be submitted for each change, in order to ensure that all
    changes are checked by the CI pipeline.

-   For easy review, PRs SHOULD have the following characteristics:

    -   a clear title

    -   wherever possible, the PR description should:

        -   explain the **'why'** of the PR. If a GH issue is linked or the PR is very simple / obvious, then it's okay to only provide a high level summary.

        -   document the **why** of the approach that was taken, especially if there are any tradeoffs or compromises made vs other implementation approaches.

    -   a small number of commits, a small number of files changed and a small number of lines changed. If a PR is too large, it should be broken down into smaller PRs.

-   PR reviews should be addressed by rewriting git
    history and **not** adding 'fixup' commits. As explained above, we must adhere to the git commit hygiene best practices. See [why and how to amend PRs](https://blog.adamspiers.org/2015/03/24/why-and-how-to-correctly-amend-github-pull-requests/).

-   Requirements for merging a PR:

    -   All CI checks should pass, unless exceptional circumstances justify ignoring them.

    -   The feedback received during PR reviews has been addressed, and everyone is satisfied with the outcome.

## Ignoring noisy git history

It is recommended to use `.gitblameignore` to ignore commits
which were purely for fixing linting issues.
