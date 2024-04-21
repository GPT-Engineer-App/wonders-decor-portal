import { Box, Flex, Heading, Text, Button, Image, VStack, HStack, Link } from "@chakra-ui/react";
import { FaInstagram, FaFacebookF, FaTwitter, FaPinterestP, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Flex direction="column" align="center" justify="center" h="100vh" bgImage="https://images.unsplash.com/photo-1707376519357-b53e370384fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob21lJTIwZGVjb3J8ZW58MHx8fHwxNzEzNjY0MTE5fDA&ixlib=rb-4.0.3&q=80&w=1080" bgSize="cover" bgPosition="center" color="white">
        <Heading as="h1" size="4xl" fontWeight="bold">
          8 Wonders Décor
        </Heading>
        <Text fontSize="xl" mt="4">
          Elegance in Every Detail
        </Text>
        <Button mt="8" size="lg" bg="white" color="black">
          Explore Our Work
        </Button>
      </Flex>

      {/* About Section */}
      <VStack spacing="4" p="8" align="start">
        <Heading as="h2" size="xl">
          About Us
        </Heading>
        <Text fontSize="md">At 8 Wonders Décor, we believe in creating spaces that tell stories. Our team of expert designers brings unparalleled creativity and passion to every project, ensuring your space is not only beautiful but also a reflection of you.</Text>
        <Button variant="outline">Learn More</Button>
      </VStack>

      {/* Services Section */}
      <Flex wrap="wrap" justify="center" p="8">
        <ServiceBox title="Interior Design" description="Transform your spaces with our bespoke interior design services." />
        <ServiceBox title="Event Styling" description="Create unforgettable events with our exquisite styling." />
        <ServiceBox title="Custom Furniture" description="Craft unique pieces that perfectly fit your space and style." />
      </Flex>

      {/* Gallery Section */}
      <VStack spacing="4" p="8" align="start">
        <Heading as="h2" size="xl">
          Gallery
        </Heading>
        <HStack spacing="4">
          <Image src="https://images.unsplash.com/photo-1467043153537-a4fba2cd39ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwbGl2aW5nJTIwcm9vbXxlbnwwfHx8fDE3MTM2NjQxMjB8MA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="200px" />
          <Image src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWRyb29tfGVufDB8fHx8MTcxMzY2NDEyMHww&ixlib=rb-4.0.3&q=80&w=1080" boxSize="200px" />
          <Image src="https://images.unsplash.com/photo-1600566752229-250ed79470f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVufGVufDB8fHx8MTcxMzY2NDEyMXww&ixlib=rb-4.0.3&q=80&w=1080" boxSize="200px" />
        </HStack>
        <Button variant="outline">View More</Button>
      </VStack>

      {/* Contact Section */}
      <Flex direction="column" align="center" p="8" bg="gray.200">
        <Heading as="h2" size="xl">
          Contact Us
        </Heading>
        <Text mt="4">Let's create something beautiful together.</Text>
        <HStack spacing="4" mt="4">
          <Link href="#" isExternal>
            <FaInstagram />
          </Link>
          <Link href="#" isExternal>
            <FaFacebookF />
          </Link>
          <Link href="#" isExternal>
            <FaTwitter />
          </Link>
          <Link href="#" isExternal>
            <FaPinterestP />
          </Link>
          <Link href="#" isExternal>
            <FaEnvelope />
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
};

const ServiceBox = ({ title, description }) => (
  <Box p="4" m="2" borderWidth="1px" borderRadius="lg" w="300px">
    <Heading as="h3" size="md">
      {title}
    </Heading>
    <Text mt="2">{description}</Text>
  </Box>
);

export default Index;
