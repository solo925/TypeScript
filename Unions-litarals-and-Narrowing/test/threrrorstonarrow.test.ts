import { describe, expect, it } from 'vitest';

describe('appElement existence check', () => {

  it('should find the app element when present', () => {
    // Mock the DOM environment by adding a fake app element
    const mockAppElement = document.createElement('div');
    mockAppElement.id = 'app';
    document.body.appendChild(mockAppElement);

    const appElement = document.getElementById('app');
    
    // Check if the element was found
    expect(appElement).toBeTruthy(); // Ensures the element exists and isn't null
  });

  it('should throw an error if the app element is missing', () => {
    // Ensure no element with ID 'app' exists in the DOM
    document.body.innerHTML = ''; // Reset the DOM

    expect(() => {
      const appElement = document.getElementById('app');
      if (!appElement) {
        throw new Error('Could not find app element');
      }
    }).toThrow('Could not find app element');
  });
});
