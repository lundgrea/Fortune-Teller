import { processAge, processGender, getAdvice } from '../apiCalls/apiCalls';


  describe('processAge', () => {
    let mockResponse, name;
    beforeEach(() => {
      mockResponse = {}
      name = 'Alison'
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        });
      });
    });
  
    it("should call fetch with the correct url", () => {
      processAge('Alyssa');
      expect(window.fetch).toHaveBeenCalledWith('https://api.agify.io?name=Alyssa');
    });
  
    it("should return a successful response (HAPPY)", () => {
      expect(processAge()).resolves.toEqual(mockResponse);
    });
  
    it("should return an error (SAD)", () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        });
      });
      expect(processAge()).rejects.toEqual(Error('There was an error processing your age'));
    });
  
    it("should return an error if the promise rejects (SAD)", () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject(Error('There was an error processing your age'));
      });
      expect(processAge()).rejects.toEqual(Error('There was an error processing your age'));
    });
  });