# Pushing the code to repository.

1. **Create a GitHub Account**:
   If you don't already have a GitHub account, go to [GitHub](https://github.com/) and sign up for a free account.

2. **Install Git**:
   Make sure you have Git installed on your local computer. You can download and install it from the official [Git website](https://git-scm.com/downloads).

3. **Set Up Git**:
   Open a terminal or command prompt and configure Git with your name and email address using the following commands. Replace `Your Name` and `youremail@example.com` with your actual name and email.
   
   ```bash
   git config --global user.name "Your Name"
   git config --global user.email "youremail@example.com"
   ```

4. **Create a New Repository on GitHub**:
   - Log in to your GitHub account.
   - Click the `+` icon in the top right corner and select "New repository."
   - Fill in the repository name, description, and other settings as needed.
   - Choose to make it public or private (public is free, but private may require a paid plan).
   - Click "Create repository."

5. **Initialize a Git Repository Locally**:
   Open a terminal or command prompt and navigate to the directory where your project/code is located. Then, run the following commands to initialize a Git repository and link it to your GitHub repository. Replace `your-username` and `your-repo-name` with your GitHub username and repository name.

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main  # This sets the branch name to 'main', replace with 'master' if needed
   git remote add origin https://github.com/your-username/your-repo-name.git
   ```

6. **Push Your Code to GitHub**:
   Push your code to your GitHub repository using the following command:

   ```bash
   git push -u origin main  # Push to the 'main' branch, use 'master' if you initialized with that branch
   ```

   You'll be prompted to enter your GitHub username and password or a personal access token (recommended for security). After entering your credentials, Git will push your code to GitHub.

7. **Verify on GitHub**:
   Visit your GitHub repository in a web browser to confirm that your code has been pushed successfully.

* Make sure to commit your changes before pushing with `git commit -m "Your commit message"` and then push with `git push`.