# CLAUDE.md - AI Assistant Guide for BesterWeb

Last Updated: 2025-11-18

## Overview

**BesterWeb** is a web development project. This document serves as a comprehensive guide for AI assistants (like Claude) working with this codebase.

### Project Status
- Repository: sebastianlungu/BesterWeb
- Current State: Initial setup
- Development Branch Pattern: `claude/claude-md-*` for AI-assisted development

---

## Repository Structure

```
BesterWeb/
├── .git/                 # Git version control
├── CLAUDE.md            # This file - AI assistant guide
└── [To be populated]
```

### Expected Structure (Update as project grows)

```
BesterWeb/
├── src/                 # Source code
├── public/              # Static assets
├── tests/               # Test files
├── docs/                # Documentation
├── config/              # Configuration files
├── scripts/             # Build and utility scripts
├── package.json         # Node.js dependencies (if applicable)
├── README.md            # User-facing documentation
├── .gitignore           # Git ignore rules
└── CLAUDE.md            # This AI guide
```

---

## Development Workflow

### Git Workflow

#### Branch Strategy
- **Main/Master Branch**: Production-ready code
- **Feature Branches**: Use descriptive names (e.g., `feature/user-authentication`, `fix/login-bug`)
- **Claude Branches**: AI-assisted work uses `claude/claude-md-*` pattern with session IDs

#### Commit Guidelines
1. **Commit Message Format**:
   ```
   <type>: <subject>

   <body>
   ```

   Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

2. **Examples**:
   ```
   feat: add user authentication module
   fix: resolve login redirect issue
   docs: update API documentation
   refactor: optimize database queries
   ```

3. **Best Practices**:
   - Write clear, descriptive commit messages
   - Focus on "why" not just "what"
   - Keep commits atomic and focused
   - Reference issue numbers when applicable

#### Push Protocol
```bash
# Always push to the correct branch with upstream tracking
git push -u origin <branch-name>

# For network failures, retry with exponential backoff:
# - Wait 2s, retry
# - Wait 4s, retry
# - Wait 8s, retry
# - Wait 16s, retry
```

#### Pull/Fetch Protocol
```bash
# Prefer specific branch fetches
git fetch origin <branch-name>

# For pulls
git pull origin <branch-name>

# Apply same retry logic for network failures
```

---

## Code Conventions

### General Principles
1. **Consistency**: Follow existing code style
2. **Readability**: Write self-documenting code
3. **DRY**: Don't Repeat Yourself
4. **KISS**: Keep It Simple, Stupid
5. **Security First**: Never introduce vulnerabilities

### Security Checklist
Always check for:
- [ ] SQL Injection vulnerabilities
- [ ] XSS (Cross-Site Scripting) vulnerabilities
- [ ] CSRF (Cross-Site Request Forgery) protection
- [ ] Command Injection risks
- [ ] Authentication/Authorization issues
- [ ] Sensitive data exposure
- [ ] Insecure dependencies
- [ ] Proper input validation
- [ ] Secure session management
- [ ] HTTPS/TLS usage

### Code Style (Update based on project language)

#### JavaScript/TypeScript
```javascript
// Use descriptive variable names
const userAuthenticated = checkAuth();

// Prefer const over let, avoid var
const API_URL = 'https://api.example.com';
let counter = 0;

// Use arrow functions for callbacks
array.map(item => item.name);

// Async/await over promises when possible
async function fetchData() {
  try {
    const data = await api.getData();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
```

#### Python
```python
# Follow PEP 8
# Use snake_case for variables and functions
def calculate_total_price(items):
    total_price = sum(item.price for item in items)
    return total_price

# Use type hints
def greet_user(name: str) -> str:
    return f"Hello, {name}!"

# Use docstrings
def process_data(data: list) -> dict:
    """
    Process input data and return structured results.

    Args:
        data: List of items to process

    Returns:
        Dictionary containing processed results
    """
    pass
```

---

## Testing Strategy

### Test Organization
```
tests/
├── unit/           # Unit tests
├── integration/    # Integration tests
├── e2e/           # End-to-end tests
└── fixtures/      # Test data and fixtures
```

### Testing Best Practices
1. **Write tests for**:
   - New features
   - Bug fixes
   - Edge cases
   - Critical business logic

2. **Test Structure** (AAA Pattern):
   ```javascript
   test('should calculate total correctly', () => {
     // Arrange
     const items = [{ price: 10 }, { price: 20 }];

     // Act
     const total = calculateTotal(items);

     // Assert
     expect(total).toBe(30);
   });
   ```

3. **Coverage Goals**:
   - Aim for 80%+ code coverage
   - 100% coverage for critical paths
   - Focus on meaningful tests, not just coverage numbers

### Running Tests
```bash
# Update these commands based on actual test setup
npm test              # Run all tests
npm test -- --watch   # Run in watch mode
npm run test:coverage # Generate coverage report
```

---

## Common Tasks & Commands

### Initial Setup
```bash
# Clone repository
git clone <repository-url>
cd BesterWeb

# Install dependencies (update based on project)
npm install
# or
pip install -r requirements.txt

# Set up environment variables
cp .env.example .env
# Edit .env with your configuration
```

### Development
```bash
# Start development server
npm run dev
# or
python manage.py runserver

# Build for production
npm run build

# Run linter
npm run lint

# Format code
npm run format
```

### Database (if applicable)
```bash
# Run migrations
npm run migrate
# or
python manage.py migrate

# Create migration
npm run migrate:create
# or
python manage.py makemigrations

# Seed database
npm run seed
```

---

## File Operations Best Practices

### For AI Assistants
1. **Always prefer editing existing files** over creating new ones
2. **Read before write**: Always use Read tool before Edit/Write
3. **Use appropriate tools**:
   - `Read`: Reading files (not `cat`)
   - `Edit`: Modifying files (not `sed`)
   - `Write`: Creating new files (not `echo >`)
   - `Grep`: Searching content (not `grep` command)
   - `Glob`: Finding files (not `find`)

4. **Never create files unless absolutely necessary**:
   - No unsolicited README.md files
   - No documentation unless requested
   - No configuration files unless needed

---

## Project-Specific Guidelines

### API Development
- Use RESTful conventions
- Version APIs (e.g., `/api/v1/`)
- Document endpoints with examples
- Include request/response schemas
- Handle errors consistently

### Frontend Development
- Component-based architecture
- Reusable components
- Responsive design
- Accessibility (WCAG standards)
- Performance optimization

### Database
- Use migrations for schema changes
- Index frequently queried fields
- Normalize data appropriately
- Use transactions for data integrity
- Regular backups

---

## Error Handling

### General Principles
```javascript
// Always handle errors gracefully
try {
  await riskyOperation();
} catch (error) {
  logger.error('Operation failed:', error);
  // Provide user-friendly error message
  return { error: 'Something went wrong. Please try again.' };
}

// Validate input
function processUser(user) {
  if (!user || !user.email) {
    throw new Error('Invalid user data');
  }
  // Process user...
}
```

---

## Dependencies & Package Management

### Adding Dependencies
```bash
# Add production dependency
npm install <package>
# or
pip install <package>

# Add dev dependency
npm install --save-dev <package>
# or
pip install --dev <package>

# Update dependencies regularly
npm update
npm audit fix
```

### Dependency Best Practices
- Keep dependencies up to date
- Review security advisories
- Minimize dependency count
- Lock dependency versions
- Document why each dependency is needed

---

## Documentation

### Code Documentation
- Write self-documenting code
- Add comments for complex logic
- Document public APIs
- Keep documentation in sync with code

### Documentation Structure
```
docs/
├── api/              # API documentation
├── architecture/     # Architecture decisions
├── guides/          # How-to guides
└── README.md        # Documentation index
```

---

## Performance Considerations

### General Guidelines
- Optimize database queries (avoid N+1)
- Implement caching where appropriate
- Lazy load resources
- Minimize bundle size
- Use CDN for static assets
- Implement pagination for large datasets
- Profile before optimizing

---

## Deployment

### Pre-deployment Checklist
- [ ] All tests passing
- [ ] Code reviewed
- [ ] Environment variables configured
- [ ] Database migrations ready
- [ ] Security scan completed
- [ ] Documentation updated
- [ ] Performance tested
- [ ] Backup created

### Deployment Commands (Update as needed)
```bash
# Build production bundle
npm run build

# Run production server
npm start

# Database migrations
npm run migrate:prod
```

---

## Troubleshooting

### Common Issues

#### Build Failures
1. Clear cache: `npm cache clean --force`
2. Remove node_modules: `rm -rf node_modules`
3. Reinstall: `npm install`

#### Test Failures
1. Check environment variables
2. Verify database state
3. Review recent changes
4. Check for race conditions

#### Performance Issues
1. Profile the application
2. Check database query performance
3. Review network requests
4. Analyze bundle size

---

## AI Assistant Specific Notes

### When Working on Tasks
1. **Plan First**: Use TodoWrite tool for complex tasks
2. **Search Smart**: Use Task tool with Explore agent for codebase exploration
3. **Parallel Operations**: Run independent operations in parallel
4. **Security**: Always check for OWASP Top 10 vulnerabilities
5. **Test**: Write/update tests for changes
6. **Commit**: Clear, descriptive commit messages
7. **Push**: Always push to correct branch with `-u` flag

### Communication Style
- Be concise and technical
- Focus on facts over validation
- Provide objective guidance
- Reference specific files with `file:line` format
- No emojis unless requested
- Output text directly, not via echo/comments

### Tool Usage Priority
1. Specialized tools over bash commands
2. Task tool for complex exploration
3. Parallel tool calls when possible
4. Read before Edit/Write
5. Grep for content search, Glob for file search

---

## Resources

### Documentation Links
- [Project Wiki](#) (Update when available)
- [API Documentation](#) (Update when available)
- [Contributing Guide](#) (Update when available)

### Useful Commands Reference
```bash
# Git operations
git status
git log --oneline -10
git diff
git branch -a

# Project specific (update as needed)
npm run help
```

---

## Maintenance

### Regular Tasks
- Update dependencies monthly
- Review and update documentation
- Check for security vulnerabilities
- Review and optimize performance
- Clean up deprecated code
- Update this CLAUDE.md file

### This Document
- Update this file as the project evolves
- Add project-specific conventions
- Document new workflows
- Include lessons learned
- Add troubleshooting steps

---

## Questions or Issues?

If you encounter issues or have questions:
1. Check existing documentation
2. Review recent commits and changes
3. Search for similar issues
4. Ask for clarification when needed

---

**Note to AI Assistants**: This is a living document. As you work on the project and discover new patterns, conventions, or important information, update this file to help future AI assistants work more effectively with this codebase.
