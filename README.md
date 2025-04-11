# POC: Modernise OSS Cloud Foundry Docs

## Motivation

Currently the OSS CF docs are built using [Bookbinder](https://github.com/pivotal-cf/bookbinder), a self written Ruby gem for stitching together several doc repos into one website. It is using the Middleman Ruby gem.
Bookbinder is not maintained and supported anymore, so are many of the dependencies. Upgrading the dependencies seems to come with a lot of challenges. Additionally, Bookbinder does not run on modern machines anymore.
This makes it difficult to check changes in the docs when contributing. Also it is necessary to clone several git repos. The overall process of contributing to the docs does not feel smooth.
While Bookbinder has been for sure a great piece of software back in the days, meanwhile there are many modern static website generators which offer a similar website by default and are much easier to handle and run.

This POC is meant as a proposal on modernising the technology stack used to build and deploy the CF docs and to make it easier to contribute by having live coding functionalities similar to `bundle exec bookbinder watch`.

## Choice of static website generator

This POC uses [Docusaurus](https://docusaurus.io/), a open-source static website generator. It offers the following benefits:

- It looks very similar to the current CF docs by default
- Many of the handcrafted components like sidebar, colour shades, table of contents are included by default
- Underlying components like React, Webpack, Babel, Node.js are all state-of-the-art
- It makes it very easy to run the project locally, build it and deploy it
- Contributors can focus on content rather than technology
- Supports plain `.md` files and `.mdx` files for e.g. conditional content
- Generates a lightweight and fast website which is supported by all common browsers
- It is meant to be used to create doc websites, even though it can be used for any content
- It is well maintained and constantly developed
- It is very popular, also for open source projects see https://docusaurus.io/showcase
- Design can be customized through CSS

## Features covered by this POC

**NOTE**: There are many dead links at the moment, because most of the content is not yet included.

- [x] Landind page
- [x] Add some of the content repos and some pages of each and integrate them into one website to get a feel on how the website will look like
- [ ] Verify that `.erb` files, including the templating features, can be transformed into supported `.md` and `.mdx` files
  - [x] Find a solution for conditional content based on configuration (e.g. if vars.platform_code == 'CF'...)
  - [x] Find a solution for third party partials (partials which come from private repos)
  - [ ] Dynamic page titles based on configuration
- [x] Verify compatibility
  - [x] Use same domain (either deploy as usual, or deploy as GitHub page and configure custom domain)
  - [x] Pages can have the same URL (specify slug in frontmatter on each page)
- [x] Get a feeling for how much work it will be to migrate to the new docs
  - Mostly the conditional content and third party partials need some changes
  - Most templates e.g. <%= vars.app_runtime_abbr %> can be easily replaced by components through search and replace

### Installation

Prerequisite: Install Node.js with the version specified in `.nvmrc`. Use [Node Version Manager](https://github.com/nvm-sh/nvm) for better usability.

Clone the repository including the submodules:
```
git clone https://github.com/svkrieger/cf-docs-new.git --recursive
```

Install dependencies
```
$ npm install
```

### Local Development

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

```
$ npm run start
```

### Build

Building the final website and make it ready for hosting is as easy as runnning:

```
$ npm run build
```

The build folder will contain all of the files.

To host the build locally run:

```
$ npm run serve
```

### Deployment

Deploying the website to GitHub pages can be also done by a single command. The configuration is located in `docusaurus.config.js`.

```
$ npm run deploy 
```

Building and deployment can be automated using GitHub actions.


### Migration examples

#### Configuration

Previously configuration was stored in a vars file together with reusable mardown snippets. It was used like this:
```
<% if vars.platform_code == 'CF' %>
  some content
<% end %>
```

Those config flags are now stored in `config.js` and can be used like this:
```
import config from '@site/config';

{config.platform_code === 'CF' ? ('some content') : null}
```

#### Conditional content

Conditional content based on configuration like this:
```
<% if vars.platform_code == 'CF' %>
* [Runtime Components](architecture/index.html)
<% else %>
* [<%= vars.app_runtime_abbr %> Components](architecture/index.html)
<% end %>
```
can be achieved like this:
```
 {config.platform_code === 'CF' ? (<li><a href="architecture/index.html">Runtime Components</a></li>) : (<li><a href="architecture/index.html"><AppRuntimeAbbr/> Components</a></li>)}

```

#### Reusable components

Reusable markdown snippets were stored in a vars file and used like this:
```
<%= vars.app_runtime_abbr %>

# e.g. turns into: CF
```

Now they are stored in `src/components/Constants.js` and can be used like this:
```
<AppRuntimeAbbr/>
```

#### Partials

Partials are similar to reusable components, but they are markdown files, which can be imported and used in other markdown files.

Previously this looked like this:

```
< partial 'oss_roles_table' >
```

And now it looks like this:

```
import OSSRolesTable from './_oss_roles_table.md';

<OSSRolesTable/>
```

#### Private partials

There are references in the docs which point to partials which are not part of the OSS docs, but seem to be added through private repos.

For example:
```
< partial "/pcf/core/pcf_roles_table" >
```

Those will render empty unless they have been added to the configuration, pointing to the partial like so:

```
const config = {
    platform_code: 'CF',
    partials: {
        PCFRolesTable: 'static/partials/test.mdx' <-- relative path from project root to partial
    }
};
```

Then simply run this npm script:
```
npm run generate-overrides
```

Now when building the project or running it locally it will render the configured partials accordingly.
