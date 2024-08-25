# DevDynamics - Developer Activity Dashboard

[DevDynamics Dashboard Live](https://dev-dynamics-dashboard-mujx5grie-parvsharmaas-projects.vercel.app/)

## Project Description

DevDynamics is a comprehensive Developer Activity Dashboard designed to visualize and analyze the daily activities of developers within an organization over a week. The dashboard provides insights into various developer activities, including code commits, pull requests (PRs), PR merges, meeting attendance, and documentation writing. By integrating these data points, DevDynamics helps teams track productivity, identify trends, and improve project management.

### Key Features:

- **Activity Tracking**: Monitor activities like commits, PRs, merges, meetings, and documentation.
- **Interactive Charts**: Visualize data using interactive charts with Recharts.
- **Theming**: Toggle between light and dark modes for better user experience.
- **Filters and Sorting**: Apply filters and sort activities to view specific data.
- **Pagination**: Navigate through large datasets with pagination controls.

## Tech Stack

- **Frontend**: Built with React for a dynamic and responsive user interface.
- **Language**: TypeScript for type safety and improved development experience.
- **Charts**: Utilizes Recharts for interactive and customizable charting solutions.
- **Styling**: Tailwind CSS for modern and responsive design.
- **Icons**: Heroicons for clean and intuitive iconography.

## Installation

To get started with DevDynamics, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/parvsharmaa/DevDynamics.git
   cd DevDynamics
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

   This will install all the necessary packages required to run the application.

3. **Start the development server**:
   ```bash
   npm start
   ```
   This command will start the development server and open the application in your default web browser.

## Configuration

If you need to customize the configuration or add new features, you can modify the following files:

- **`src/api/data.json`**: Contains the sample data used for visualization.
- **`src/components`**: Includes various React components used in the dashboard.
- **`src/styles`**: Contains Tailwind CSS configurations and custom styles.

## Usage

Once the application is running, you can interact with the dashboard through the following features:

- **Filters**: Use the search bars in the table headers to filter data by user, activity, status, etc.
- **Sorting**: Click on column headers to sort the table by different criteria.
- **Pagination**: Navigate through pages of data using the pagination controls.

## Contributing

Contributions are welcome! If you have any suggestions or improvements, please open an issue or submit a pull request.

1. **Fork the repository**.
2. **Create a new branch**: `git checkout -b feature/your-feature`.
3. **Make your changes**.
4. **Commit your changes**: `git commit -am 'Add new feature'`.
5. **Push to the branch**: `git push origin feature/your-feature`.
6. **Create a new Pull Request**.
