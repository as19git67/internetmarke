export const invalidProducts = [
  null,
  {},
  {
    INVALID: {
      id: 1
    }
  }
];

export const validProducts = [
  {
    extendedIdentifier: {
      attributes: {
        destination: 'national'
      },
      externIdentifier: {
        attributes: {
          source: 'PPL',
          id: '1',
          name: 'Standardbrief',
          firstPPLVersion: '1',
          lastPPLVersion: '47',
          actualPPLVersion: '47'
        }
      }
    },
    priceDefinition: {
      price: {
        calculatedGrossPrice: {
          attributes: {
            value: '0.80',
            currency: 'EUR',
            calculated: 'true'
          }
        }
      }
    }
  },
  {
    extendedIdentifier: {
      attributes: {
        destination: 'national'
      },
      externIdentifier: {
        attributes: {
          source: 'PPL',
          id: '1002',
          name: 'Standardbrief Integral + EINSCHREIBEN EINWURF',
          firstPPLVersion: '35',
          lastPPLVersion: '39',
          actualPPLVersion: '39'
        }
      }
    },
    priceDefinition: {
      price: {
        calculatedGrossPrice: {
          attributes: {
            value: '2.85',
            currency: 'EUR',
            calculated: 'true'
          }
        }
      }
    },
    dimensionList: {
      length: {
        attributes: {
          minValue: '140',
          maxValue: '235',
          unit: 'mm'
        }
      },
      width: {
        attributes: {
          minValue: '90',
          maxValue: '125',
          unit: 'mm'
        }
      },
      height: {
        attributes: {
          minValue: '0',
          maxValue: '5',
          unit: 'mm'
        }
      }
    },
    weight: {
      attributes: {
        minValue: '0',
        maxValue: '20',
        unit: 'g'
      }
    }
  }
];

export const skipOptionals = [
  {
    raw: {
      extendedIdentifier: {
        attributes: {
          destination: 'national'
        },
        externIdentifier: {
          attributes: {
            id: '1002',
            name: 'Standardbrief Integral + EINSCHREIBEN EINWURF',
            actualPPLVersion: '39'
          }
        }
      },
      priceDefinition: {
        price: {
          calculatedGrossPrice: {
            attributes: {
              value: '2.85'
            }
          }
        }
      }
    }
  }
];
