# Welcome to the Blazed Nation
![Blazed Labs "Another dream turned into reality."](https://blazed.sirv.com/blazed-labs/blazed-banner-sm.png)

This is the virtual home of the Blazed Nation, a micronation of federated digital property.

## Explore the Blazed Nation
* [National Forum](https://www.facebook.com/groups/blazedforum)
* [Blazed Government](government/intro)  ([GitHub](https://github.com/blazed-nation/blz-gov))
* [Woodrow Financial](https://github.com/blazed-nation/woodrow)

---

## Contributing
Thank you for investing your time in contributing to our project! 
Any contribution you make will be reflected on [blazed.city](https://blazed.city/).

Read our [Code of Conduct](/code-of-conduct) to keep our community approachable and respectable.

In this guide you will get an overview of the contribution workflow from opening an issue, creating a PR, reviewing, and merging the PR.

### New contributor guide
To get an overview of the project, read the README. Here are some resources to help you get started with open source contributions:

* [Finding ways to contribute to Blazed software](https://github.com/orgs/blazed-nation/discussions/1)
* [Set up Git](https://docs.github.com/en/get-started/quickstart/set-up-git)
* [GitHub Flow](https://docs.github.com/en/get-started/quickstart/github-flow)
* [Collaborating with pull requests](https://docs.github.com/en/github/collaborating-with-pull-requests)

### Issues

#### Create a new issue
If you spot a problem with this website, [search if an issue already exists](https://docs.github.com/en/github/searching-for-information-on-github/searching-on-github/searching-issues-and-pull-requests#search-by-the-title-body-or-comments). If a related issue doesn't exist, you can open a new issue using a relevant [issue form](https://github.com/tyler-ruff/blazed-city/issues/new).

#### Solve an issue
Scan through our [existing issues](https://github.com/tyler-ruff/blazed-city/issues) to find one that interests you. You can narrow down the search using labels as filters. See Labels for more information. As a general rule, we don’t assign issues to anyone. If you find an issue to work on, you are welcome to open a PR with a fix.

### Make Changes

#### Make changes in the UI
Click Make a contribution at the bottom of any docs page to make small changes such as a typo, sentence fix, or a broken link. This takes you to the .md file where you can make your changes and create a [pull request]() for a review.

#### Make changes locally
1. Fork the repository.
   * Using GitHub Desktop:
     * Getting started with GitHub Desktop will guide you through setting up Desktop.
     * Once Desktop is set up, you can use it to fork the repo!
   * Using the command line:
     * Fork the repo so that you can make your changes without affecting the original project until you're ready to merge them.
### Pull Request

When you're finished with the changes, create a pull request, also known as a PR.
- Fill the "Ready for review" template so that we can review your PR. This template helps reviewers understand your changes as well as the purpose of your pull request.
- Don't forget to [link PR to issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue) if you are solving one.
- Enable the checkbox to [allow maintainer edits](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/allowing-changes-to-a-pull-request-branch-created-from-a-fork) so the branch can be updated for a merge.
Once you submit your PR, a Docs team member will review your proposal. We may ask questions or request additional information.
- We may ask for changes to be made before a PR can be merged, either using [suggested changes](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/incorporating-feedback-in-your-pull-request) or pull request comments. You can apply suggested changes directly through the UI. You can make any other changes in your fork, then commit them to your branch.
- As you update your PR and apply changes, mark each conversation as [resolved](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/commenting-on-a-pull-request#resolving-conversations).
- If you run into any merge issues, checkout this [git tutorial](https://github.com/skills/resolve-merge-conflicts) to help you resolve merge conflicts and other issues.

#### Your PR is merged!

*Congratulations* The Blazed team thanks you.

Once your PR is merged, your contributions will be publicly visible on the [GitHub docs](https://docs.github.com/en).

Now that you are part of the GitHub docs community, see how else you can [contribute to the docs](/contributing/types-of-contributions.md).

### Windows

This site can be developed on Windows, however a few potential gotchas need to be kept in mind:

1. Regular Expressions: Windows uses `\r\n` for line endings, while Unix-based systems use `\n`. Therefore, when working on Regular Expressions, use `\r?\n` instead of `\n` in order to support both environments. The Node.js [`os.EOL`](https://nodejs.org/api/os.html#os_os_eol) property can be used to get an OS-specific end-of-line marker.
2. Paths: Windows systems use `\` for the path separator, which would be returned by `path.join` and others. You could use `path.posix`, `path.posix.join` etc and the [slash](https://ghub.io/slash) module, if you need forward slashes - like for constructing URLs - or ensure your code works with either.
3. Bash: Not every Windows developer has a terminal that fully supports Bash, so it's generally preferred to write [scripts](/script) in JavaScript instead of Bash.
4. Filename too long error: There is a 260 character limit for a filename when Git is compiled with `msys`. While the suggestions below are not guaranteed to work and could cause other issues, a few workarounds include:
    - Update Git configuration: `git config --system core.longpaths true`
    - Consider using a different Git client on Windows

---

[![Blazed Labs](https://img.shields.io/badge/Blazed-Labs-red?style=for-the-badge&logo=data:image/webp;base64,UklGRgwBAABXRUJQVlA4WAoAAAAQAAAAEwAAEwAAQUxQSJsAAAABgFvb1rLo+3Eyd0lZtOESaeadEHkBELEog5zMfVwbcPc78v3vm+kgIiaA/aPS6nA4XVaJ5hgcHRye9nQ0VgPwXmaCFQBPQZESgOeISP4TeE2KFD6B94yAtg8AXTWt8PDrNkXy74A79hD0fci2lXKVR7mLmExgH8ShnaPogPpZ5Vg3JMxNvwwj2tj4i+Xm58RxlnEls49olHh/CABWUDggSgAAADADAJ0BKhQAFAA+bSyRRaQioZgEAEAGxLOAX7UGAIdtN3AA/vPA0UtZSPblfop///kEdls9BxW6nkyImweTORm+zO2yEn0/AgAA "Blazed Labs")](https://blazedlabs.com/)

---

[&#x21d1; Back to Top](#welcome-to-the-blazed-nation) | [Customer Feedback](https://forms.gle/f9F4SRyfpKdAHJ1R6) | [Invest in Blazed](https://opencollective.com/blazed-nation) | [@blazed-nation](https://github.com/blazed-nation/)

**&copy;2020-2023** [Blazed Labs LLC](https://blazedlabs.com/), [Ruff Management Inc](https://ruff-manage.com/). **All Rights Reserved.**