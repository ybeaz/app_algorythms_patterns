# Development policies

## Dev set of mind, code conventions and accepted practices

1. Naming conventions

- One file = one entity, one file - one function/ class/ component name: they names should be identical such as `getMyFunction.js` contains only the function `getMyFunction`
- Named export is strongly preferred and recommended. Default export is an exception
- Camel case naming is accepted for directories, file names, functions, components
- Functions start from the prefix `get` by default
  If a function returns boolean, it starts preferably from the prefix `is`
  If a function is the decorator, it starts from the prefix `with`
- React components names start from the upper case letter such as UpperCaseLetter
- Types names start from the upper case letter and finish with Type word such as `type MyNextType = ...`
  If the type is enum then the name contains EnumType suffix such as `enum MyNextEnumType = ...`

2. Creation conventions

- Function creation follows the `getTemplateFunc.ts` template
- Function unit test creation follow the `getTemplateFunc.test.ts` template
- Functions take two arguments: params and options
- Functions should be able to be wrapped by `getTryCatchFinallyWrapper` function
- Function should be places in the yourails_common repository by default
  Only if the function is very specific to the repo it is places in the repo
- Components creation follows `TemplateReact` template

3. Documentation convention

- Devs add the items of `snippets of intrinsic knowledge` to `## How to section` of `README_DEV.md`
  Intrinsic knowledge - knowledge that does not come directly from the code or takes potentially a lot of time to restore later for the dev itself of the third party.

4. The following are best practices for file naming. File names should:
   https://records-express.blogs.archives.gov/2017/08/22/best-practices-for-file-naming/

Be unique and consistently structured;
Be persistent and not tied to anything that changes over time or location;
Limit the character length to no more than 25-35 characters;
Use leading 0s to facilitate sorting in numerical order if following a numeric scheme “001, 002, …010, 011 … 100, 101, etc.” instead of “1, 2, …10, 11 … 100, 101, etc.”;
Contain a file format extension;
Use a period followed by a file extension (for example, .tif, .jpg, .gif, .pdf, .wav, .mpg);
Use lowercase letters. However, when a name has more than one word, start each word with an uppercase letter for example, “File_Name_Convention_001.doc”;
Use numbers and/or letters but not characters such as symbols or spaces that could cause complications across operating platforms;
Use hyphens or underscores instead of spaces;
Use international standard date notation (YYYY-MM-DD or YYYYMMDD);
Avoid blank spaces anywhere within the character string; and
Not use an overly complex or lengthy naming scheme that is susceptible to human error during manual input, such as “filenameconventionjoesfinalversioneditedfinal.doc”.
