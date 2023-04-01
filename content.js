// Define a function to extract information from each job posting
function extractJobData(jobListing) {
  const jobTitle = jobListing.querySelector('.job-title-text').innerText;
  const company = jobListing.querySelector('.job-company-name').innerText;
  const location = jobListing.querySelector('.job-location').innerText;
  const datePosted = jobListing.querySelector('.job-posted-date').innerText;
  
  return {
    jobTitle,
    company,
    location,
    datePosted
  };
}

// Find all job listings on the page
const jobListings = document.querySelectorAll('.job-card-container');

// Extract data from each job listing
const jobData = [];
jobListings.forEach(jobListing => {
  const jobInfo = extractJobData(jobListing);
  jobData.push(jobInfo);
});

// Log the extracted data to the console
console.log(jobData);
