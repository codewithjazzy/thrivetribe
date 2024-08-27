import React, { useState } from 'react';
import {
    Box,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Heading,
    Link,
    Text
} from '@chakra-ui/react';


export default function BlogCard({ title, content }){
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card maxW='lg' variant='elevated'>
      <CardHeader>
        <Heading size='md' textAlign="center">{title}</Heading>   
      </CardHeader>
      <CardBody>
        <Box noOfLines={isExpanded ? null : 5}>
            {content}
        </Box>
      </CardBody>
      <CardFooter justify="flex-end">
        <Text as="i" fontSize={16}>
            <Link
                onClick={() => setIsExpanded(!isExpanded)}
                fontWeight="500"
            >
                {isExpanded ? 'Show Less' : 'Read More'}
            </Link>
        </Text>
      </CardFooter>
    </Card>
  );
}
